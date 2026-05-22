import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { bracketMatching, HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { tags } from '@lezer/highlight';
import './style.css';
import { exercises } from './exercises.js';

const STORAGE_PREFIX = 'js-extra-practice';
const codeKey = id => `${STORAGE_PREFIX}:code:${id}`;
const completedKey = `${STORAGE_PREFIX}:completed`;

const app = document.getElementById('app');
const isDevelopment = import.meta.env.DEV;
let selectedExerciseId = exercises[0].id;
let editorView;
let lastResult = null;

const editorTheme = EditorView.theme({
  '&': {
    color: '#24292f',
    backgroundColor: '#ffffff',
  },
  '.cm-content': {
    caretColor: '#4f46e5',
    padding: '14px 0',
  },
  '.cm-line': {
    padding: '0 16px',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: '#4f46e5',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: '#dbeafe',
  },
  '.cm-gutters': {
    backgroundColor: '#f6f8fa',
    color: '#8c959f',
    borderRight: '1px solid #d8dee4',
  },
  '.cm-activeLine': {
    backgroundColor: '#f6f8fa',
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
  },
  '&.cm-focused': {
    outline: 'none',
  },
});

const editorHighlightStyle = HighlightStyle.define([
  { tag: tags.keyword, color: '#cf222e' },
  { tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName], color: '#0550ae' },
  { tag: [tags.function(tags.variableName), tags.labelName], color: '#8250df' },
  { tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)], color: '#0550ae' },
  { tag: [tags.definition(tags.name), tags.separator], color: '#24292f' },
  { tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace], color: '#953800' },
  { tag: [tags.operator, tags.operatorKeyword], color: '#cf222e' },
  { tag: [tags.url, tags.escape, tags.regexp, tags.link], color: '#0a3069' },
  { tag: [tags.meta, tags.comment], color: '#6e7781' },
  { tag: tags.strong, fontWeight: '700' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: tags.link, textDecoration: 'underline' },
  { tag: tags.heading, fontWeight: '700', color: '#0550ae' },
  { tag: [tags.atom, tags.bool, tags.special(tags.variableName)], color: '#0550ae' },
  { tag: [tags.processingInstruction, tags.string, tags.inserted], color: '#0a3069' },
  { tag: tags.invalid, color: '#82071e' },
]);

app.innerHTML = `
  <header class="site-header">
    <div class="container header-content">
      <div>
        <p class="eyebrow">Corso Web Development</p>
        <h1>JS Extra Practice</h1>
        <p class="intro">
          Allenati con piccoli esercizi JavaScript: scrivi la funzione,
          esegui i test e apri la soluzione solo quando serve.
        </p>
      </div>

      <div class="summary-box" aria-label="Progresso esercizi">
        <strong id="progress-count">0 / ${exercises.length}</strong>
        <span>esercizi completati</span>
      </div>
    </div>
  </header>

  <main class="container app-layout">
    <aside class="exercise-panel" aria-label="Elenco esercizi">
      <section class="toolbar" aria-label="Filtri esercizi">
        <label class="field">
          <span>Livello</span>
          <select id="level-filter">
            <option value="all">Tutti</option>
            <option value="snack">Snack</option>
            <option value="umano">Umano</option>
            <option value="esperto">Esperto</option>
          </select>
        </label>

        <label class="field">
          <span>Cerca</span>
          <input id="search-input" type="search" placeholder="Cerca esercizio..." />
        </label>
      </section>

      <p class="results-info" aria-live="polite">
        <strong id="visible-count">${exercises.length}</strong>
        <span id="visible-label">esercizi visibili</span>
      </p>

      <nav id="exercise-list" class="exercise-list"></nav>
    </aside>

    <section class="practice-area" aria-live="polite">
      <div id="success-message" class="success-message" hidden>
        Tutti gli esercizi completati. Ecco un’arancina! 🍘
      </div>

      ${
        isDevelopment
          ? `<div class="dev-tools" aria-label="Strumenti di sviluppo">
              <strong>Dev tools</strong>
              <button id="complete-all-button" class="button secondary" type="button">Completa tutto</button>
              <button id="reset-state-button" class="button secondary" type="button">Reset stato</button>
            </div>`
          : ''
      }

      <article class="workspace">
        <div class="exercise-main">
          <div class="exercise-meta">
            <span id="exercise-level" class="badge"></span>
            <span id="exercise-number" class="exercise-number"></span>
            <span id="exercise-status" class="status-pill"></span>
          </div>
          <h2 id="exercise-title"></h2>
          <p id="exercise-prompt" class="prompt"></p>
        </div>

        <div class="work-grid">
          <section class="editor-section">
            <div class="section-heading">
              <h3>Il tuo codice</h3>
              <button id="reset-button" class="button secondary" type="button">Reset esercizio</button>
            </div>
            <div id="editor" class="editor-shell"></div>
            <div class="example-card" aria-label="Esempio input output">
              <div>
                <span>Input</span>
                <code id="example-input"></code>
              </div>
              <div>
                <span>Output atteso</span>
                <code id="example-output"></code>
              </div>
            </div>
          </section>

          <section class="output-section">
            <div class="section-heading">
              <h3>Output</h3>
              <button id="run-button" class="button primary" type="button">Esegui test</button>
            </div>
            <div id="output" class="output-box muted-output">
              Scrivi la soluzione e premi "Esegui test".
            </div>
          </section>
        </div>

        <details class="solution-panel">
          <summary>Mostra soluzione e spiegazione</summary>
          <div class="solution-content">
            <section>
              <h3>Soluzione</h3>
              <pre><code id="solution-code"></code></pre>
            </section>

            <section>
              <h3>Spiegazione</h3>
              <p id="solution-explanation" class="explanation"></p>
            </section>
          </div>
        </details>
      </article>
    </section>
  </main>

  <footer class="site-footer">
    <p>
      Codice sorgente disponibile su <a href="https://github.com/emanuelefavero/js-extra-practice" target="_blank" rel="noreferrer">GitHub</a>.
    </p>
  </footer>
`;

const levelFilter = document.getElementById('level-filter');
const searchInput = document.getElementById('search-input');
const exerciseList = document.getElementById('exercise-list');
const visibleCount = document.getElementById('visible-count');
const visibleLabel = document.getElementById('visible-label');
const progressCount = document.getElementById('progress-count');
const successMessage = document.getElementById('success-message');
const completeAllButton = document.getElementById('complete-all-button');
const resetStateButton = document.getElementById('reset-state-button');
const exerciseLevel = document.getElementById('exercise-level');
const exerciseNumber = document.getElementById('exercise-number');
const exerciseStatus = document.getElementById('exercise-status');
const exerciseTitle = document.getElementById('exercise-title');
const exercisePrompt = document.getElementById('exercise-prompt');
const editorElement = document.getElementById('editor');
const outputElement = document.getElementById('output');
const exampleInput = document.getElementById('example-input');
const exampleOutput = document.getElementById('example-output');
const runButton = document.getElementById('run-button');
const resetButton = document.getElementById('reset-button');
const solutionPanel = document.querySelector('.solution-panel');
const solutionCode = document.getElementById('solution-code');
const solutionExplanation = document.getElementById('solution-explanation');

function getCompletedIds() {
  const savedValue = localStorage.getItem(completedKey);
  if (!savedValue) return [];

  try {
    return JSON.parse(savedValue);
  } catch {
    return [];
  }
}

function saveCompletedIds(ids) {
  localStorage.setItem(completedKey, JSON.stringify(ids));
}

function isCompleted(id) {
  return getCompletedIds().includes(id);
}

function markCompleted(id) {
  const completedIds = getCompletedIds();
  if (!completedIds.includes(id)) {
    completedIds.push(id);
    saveCompletedIds(completedIds);
  }
}

function unmarkCompleted(id) {
  const completedIds = getCompletedIds().filter(completedId => completedId !== id);
  saveCompletedIds(completedIds);
}

function getSavedCode(exercise) {
  return localStorage.getItem(codeKey(exercise.id)) || exercise.starterCode;
}

function saveCurrentCode() {
  const exercise = getSelectedExercise();
  localStorage.setItem(codeKey(exercise.id), editorView.state.doc.toString());
}

function normalizeText(text) {
  return text.toLowerCase().trim();
}

function getFilteredExercises() {
  const selectedLevel = levelFilter.value;
  const searchText = normalizeText(searchInput.value);

  return exercises.filter(exercise => {
    const matchesLevel = selectedLevel === 'all' || exercise.level === selectedLevel;
    const searchableText = normalizeText(`${exercise.level} ${exercise.title} ${exercise.prompt} ${exercise.functionName}`);
    const matchesSearch = searchableText.includes(searchText);

    return matchesLevel && matchesSearch;
  });
}

function getSelectedExercise() {
  return exercises.find(exercise => exercise.id === selectedExerciseId);
}

function deepEqual(value, expected) {
  return JSON.stringify(value) === JSON.stringify(expected);
}

function formatValue(value) {
  if (Array.isArray(value)) {
    return `[${value.map(item => formatValue(item)).join(', ')}]`;
  }

  return JSON.stringify(value);
}

function formatFunctionCall(exercise) {
  const firstTest = exercise.tests[0];
  const args = firstTest.args.map(arg => formatValue(arg)).join(', ');
  return `${exercise.functionName}(${args})`;
}

function runExerciseTests(exercise, code) {
  let userFunction;

  try {
    userFunction = new Function(`${code}\nreturn ${exercise.functionName};`)();
  } catch (error) {
    return {
      passed: false,
      error: `Errore nel codice: ${error.message}`,
      tests: [],
    };
  }

  if (typeof userFunction !== 'function') {
    return {
      passed: false,
      error: `La funzione ${exercise.functionName} non e stata trovata.`,
      tests: [],
    };
  }

  const testResults = [];

  for (let i = 0; i < exercise.tests.length; i++) {
    const test = exercise.tests[i];

    try {
      const result = userFunction(...structuredClone(test.args));
      const passed = deepEqual(result, test.expected);

      testResults.push({
        passed,
        message: test.message,
        expected: test.expected,
        received: result,
      });
    } catch (error) {
      testResults.push({
        passed: false,
        message: test.message,
        expected: test.expected,
        received: `Errore: ${error.message}`,
      });
    }
  }

  return {
    passed: testResults.every(test => test.passed),
    error: '',
    tests: testResults,
  };
}

function renderExerciseList() {
  const filteredExercises = getFilteredExercises();
  visibleCount.textContent = filteredExercises.length;
  visibleLabel.textContent = filteredExercises.length === 1 ? 'esercizio visibile' : 'esercizi visibili';

  if (filteredExercises.length === 0) {
    exerciseList.innerHTML = '<p class="empty-state">Nessun esercizio trovato.</p>';
    return;
  }

  if (!filteredExercises.some(exercise => exercise.id === selectedExerciseId)) {
    selectedExerciseId = filteredExercises[0].id;
    lastResult = null;
    loadSelectedExercise();
  }

  exerciseList.innerHTML = filteredExercises
    .map((exercise, index) => {
      const completed = isCompleted(exercise.id);
      const active = exercise.id === selectedExerciseId;

      return `
        <button class="exercise-nav-item ${active ? 'active' : ''}" type="button" data-id="${exercise.id}">
          <span>
            <strong>${index + 1}. ${exercise.title}</strong>
            <small>${exercise.level}</small>
          </span>
          <span class="nav-status ${completed ? 'completed' : ''}">${completed ? 'Completato' : 'Da fare'}</span>
        </button>
      `;
    })
    .join('');
}

function renderProgress() {
  const completedCount = getCompletedIds().length;
  progressCount.textContent = `${completedCount} / ${exercises.length}`;
  successMessage.hidden = completedCount !== exercises.length;
}

function renderOutput(result) {
  if (!result) {
    outputElement.className = 'output-box muted-output';
    outputElement.textContent = 'Scrivi la soluzione e premi "Esegui test".';
    return;
  }

  if (result.error) {
    outputElement.className = 'output-box error-output';
    outputElement.innerHTML = `<strong>Test non eseguiti</strong><p>${result.error}</p>`;
    return;
  }

  const items = result.tests
    .map(test => {
      const icon = test.passed ? 'OK' : 'NO';
      const detail = test.passed
        ? ''
        : `<small>Atteso: ${formatValue(test.expected)} | Ricevuto: ${formatValue(test.received)}</small>`;

      return `<li class="${test.passed ? 'passed' : 'failed'}"><strong>${icon}</strong><span>${test.message}${detail}</span></li>`;
    })
    .join('');

  outputElement.className = `output-box ${result.passed ? 'success-output' : 'error-output'}`;
  outputElement.innerHTML = `
    <strong>${result.passed ? 'Tutti i test sono passati.' : 'Alcuni test non passano ancora.'}</strong>
    <ul>${items}</ul>
  `;
}

function setEditorCode(code) {
  editorView.dispatch({
    changes: {
      from: 0,
      to: editorView.state.doc.length,
      insert: code,
    },
  });
}

function loadSelectedExercise() {
  const exercise = getSelectedExercise();
  const index = exercises.indexOf(exercise) + 1;

  exerciseLevel.textContent = exercise.level;
  exerciseLevel.className = `badge badge-${exercise.level}`;
  exerciseNumber.textContent = `Esercizio ${index} di ${exercises.length}`;
  exerciseTitle.textContent = exercise.title;
  exercisePrompt.textContent = exercise.prompt;
  solutionCode.textContent = exercise.solution;
  solutionExplanation.textContent = exercise.explanation;
  exampleInput.textContent = formatFunctionCall(exercise);
  exampleOutput.textContent = formatValue(exercise.tests[0].expected);
  solutionPanel.open = false;
  exerciseStatus.textContent = isCompleted(exercise.id) ? 'Completato' : 'Da fare';
  exerciseStatus.className = `status-pill ${isCompleted(exercise.id) ? 'completed' : ''}`;

  setEditorCode(getSavedCode(exercise));
  renderOutput(lastResult);
  renderProgress();
  renderExerciseList();
}

function runCurrentExercise() {
  const exercise = getSelectedExercise();
  saveCurrentCode();
  lastResult = runExerciseTests(exercise, editorView.state.doc.toString());

  if (lastResult.passed) {
    markCompleted(exercise.id);
  } else {
    unmarkCompleted(exercise.id);
  }

  renderOutput(lastResult);
  renderProgress();
  renderExerciseList();
  exerciseStatus.textContent = isCompleted(exercise.id) ? 'Completato' : 'Da fare';
  exerciseStatus.className = `status-pill ${isCompleted(exercise.id) ? 'completed' : ''}`;
}

function resetCurrentExercise() {
  const exercise = getSelectedExercise();
  localStorage.removeItem(codeKey(exercise.id));
  unmarkCompleted(exercise.id);
  lastResult = null;
  setEditorCode(exercise.starterCode);
  renderOutput(lastResult);
  renderProgress();
  renderExerciseList();
  exerciseStatus.textContent = 'Da fare';
  exerciseStatus.className = 'status-pill';
}

function completeAllExercisesForDev() {
  saveCompletedIds(exercises.map(exercise => exercise.id));
  renderProgress();
  renderExerciseList();
  exerciseStatus.textContent = 'Completato';
  exerciseStatus.className = 'status-pill completed';
}

function resetStateForDev() {
  localStorage.removeItem(completedKey);

  for (let i = 0; i < exercises.length; i++) {
    localStorage.removeItem(codeKey(exercises[i].id));
  }

  selectedExerciseId = exercises[0].id;
  lastResult = null;
  levelFilter.value = 'all';
  searchInput.value = '';
  loadSelectedExercise();
}

editorView = new EditorView({
  doc: exercises[0].starterCode,
  extensions: [
    lineNumbers(),
    history(),
    bracketMatching(),
    editorTheme,
    syntaxHighlighting(editorHighlightStyle),
    javascript(),
    keymap.of([...defaultKeymap, ...historyKeymap]),
    EditorState.tabSize.of(2),
    EditorView.updateListener.of(update => {
      if (update.docChanged) saveCurrentCode();
    }),
  ],
  parent: editorElement,
});

exerciseList.addEventListener('click', event => {
  const button = event.target.closest('[data-id]');
  if (!button) return;

  selectedExerciseId = button.dataset.id;
  lastResult = null;
  loadSelectedExercise();
});

levelFilter.addEventListener('change', () => {
  lastResult = null;
  renderExerciseList();
  loadSelectedExercise();
});

searchInput.addEventListener('input', () => {
  lastResult = null;
  renderExerciseList();
  loadSelectedExercise();
});

runButton.addEventListener('click', runCurrentExercise);
resetButton.addEventListener('click', resetCurrentExercise);

if (isDevelopment) {
  completeAllButton.addEventListener('click', completeAllExercisesForDev);
  resetStateButton.addEventListener('click', resetStateForDev);
}

loadSelectedExercise();

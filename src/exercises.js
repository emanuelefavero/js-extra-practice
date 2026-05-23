export const exercises = [
  {
    id: 'snack-01',
    level: 'snack',
    title: 'Restituisci un saluto personalizzato',
    prompt:
      'Scrivi una funzione che riceve una stringa di saluto e un nome, poi restituisce un saluto personalizzato.',
    functionName: 'greet',
    starterCode: `const greet = (greeting, name) => {

};`,
    solution: `const greet = (greeting, name) => greeting + ', ' + name + '!';`,
    explanation: `Vogliamo costruire una nuova stringa partendo da due valori: il saluto e il nome.

Passaggi:
1. Prendiamo il valore di greeting, ad esempio "Ciao".
2. Aggiungiamo una virgola e uno spazio per rendere il saluto leggibile.
3. Aggiungiamo il nome ricevuto dalla funzione.
4. Completiamo la frase con il punto esclamativo.

Alla fine otteniamo una stringa unica, ad esempio "Ciao, Anna!".`,
    hints: [
      'Pensa al risultato come a una frase costruita attaccando piu pezzi di testo.',
      'Ricorda che con le stringhe puoi usare `+` per unire saluto, punteggiatura e nome.',
    ],
    tests: [
      {
        args: ['Ciao', 'Anna'],
        expected: 'Ciao, Anna!',
        message: "saluto con 'Ciao' e 'Anna'",
      },
      {
        args: ['Buongiorno', 'Paolo'],
        expected: 'Buongiorno, Paolo!',
        message: "saluto con 'Buongiorno' e 'Paolo'",
      },
    ],
  },
  {
    id: 'snack-02',
    level: 'snack',
    title: 'Restituisci le iniziali dei nomi',
    prompt:
      'Scrivi una funzione che riceve un array di nomi e restituisce un nuovo array con la prima lettera di ogni nome.',
    functionName: 'getInitials',
    starterCode: `const getInitials = names => {

};`,
    solution: `const getInitials = names => {
  const initials = [];

  for (let i = 0; i < names.length; i++) {
    initials.push(names[i][0]);
  }

  return initials;
};`,
    explanation:
      `Vogliamo trasformare un array di nomi in un array di iniziali.

Passaggi:
1. Prepariamo un array vuoto in cui salvare il risultato.
2. Per ogni nome leggiamo il primo carattere con ` +
      '`names[i][0]`' +
      `.
3. Aggiungiamo quella lettera nell'array delle iniziali.

Alla fine restituiamo il nuovo array con una iniziale per ogni nome ricevuto.`,
    hints: [
      'Ti serve un array nuovo dove raccogliere le iniziali una alla volta.',
      'Dentro il ciclo, il primo carattere di un nome si puo leggere con `[0]`.',
    ],
    tests: [
      {
        args: [['Anna', 'Paolo', 'Silvia']],
        expected: ['A', 'P', 'S'],
        message: 'iniziali di Anna, Paolo, Silvia',
      },
      { args: [['Giulia']], expected: ['G'], message: 'iniziale di Giulia' },
    ],
  },
  {
    id: 'snack-03',
    level: 'snack',
    title: 'Filtra i nomi per iniziale',
    prompt:
      'Scrivi una funzione che riceve un array di nomi e una lettera, poi restituisce solo i nomi che iniziano con quella lettera.',
    functionName: 'filterByInitial',
    starterCode: `const filterByInitial = (names, letter) => {

};`,
    solution: `const filterByInitial = (names, letter) => {
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name[0] === letter) result.push(name);
  }

  return result;
};`,
    explanation:
      `Vogliamo creare un nuovo array che contenga solo i nomi che iniziano con una certa lettera.

Passaggi:
1. Prepariamo un array vuoto per i nomi che superano il controllo.
2. Per ogni nome leggiamo il primo carattere con ` +
      '`name[0]`' +
      `.
3. Se quel carattere e uguale alla lettera cercata, aggiungiamo il nome al risultato.

Alla fine otteniamo un array filtrato, senza modificare l'array originale.`,
    hints: [
      'Prepara un array vuoto e aggiungi solo i nomi che superano il controllo.',
      'Per ogni nome confronta la sua prima lettera con la lettera ricevuta dalla funzione.',
    ],
    tests: [
      {
        args: [['Bruno', 'Anna', 'Bianca'], 'B'],
        expected: ['Bruno', 'Bianca'],
        message: 'nomi che iniziano con B',
      },
      {
        args: [['Anna', 'Sofia'], 'M'],
        expected: [],
        message: 'nessun nome che inizia con M',
      },
    ],
  },
  {
    id: 'snack-04',
    level: 'snack',
    title: 'Conta il numero di vocali in una stringa',
    prompt:
      'Scrivi una funzione che riceve una stringa e restituisce quante vocali contiene.',
    functionName: 'countVowels',
    starterCode: `const countVowels = str => {

};`,
    solution: `const countVowels = str => {
  const vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (vowels.includes(letter)) count++;
  }

  return count;
};`,
    explanation:
      `Vogliamo contare quante lettere della stringa sono vocali. Per farlo, confrontiamo ogni carattere con un insieme di vocali valide.

Passaggi:
1. Salviamo le vocali in una stringa: ` +
      '`aeiou`' +
      `.
2. Per ogni carattere, creiamo una versione minuscola con ` +
      '`.toLowerCase()`' +
      `, cosi anche eventuali maiuscole vengono contate correttamente.
3. Usiamo ` +
      '`.includes()`' +
      ` per verificare se quel carattere e presente tra le vocali.
4. Ogni volta che il controllo e vero, aumentiamo il contatore.

Alla fine il contatore contiene il numero totale di vocali trovate nella stringa.`,
    hints: [
      'Usa una variabile contatore che parte da 0 e aumenta quando trovi una vocale.',
      'Per capire se una lettera e una vocale, puoi confrontarla con una stringa come `aeiou`.',
    ],
    tests: [
      { args: ['ciao'], expected: 3, message: "'ciao' contiene 3 vocali" },
      { args: ['JS'], expected: 0, message: "'JS' non contiene vocali" },
      {
        args: ['Esercizi'],
        expected: 4,
        message: "'Esercizi' contiene 4 vocali",
      },
    ],
  },
  {
    id: 'snack-05',
    level: 'snack',
    title: 'Restituisci il nome piu lungo',
    prompt:
      'Scrivi una funzione che riceve un array di nomi e restituisce il nome piu lungo.',
    functionName: 'longestName',
    starterCode: `const longestName = names => {

};`,
    solution: `const longestName = names => {
  if (names.length === 0) return '';

  let longest = names[0];

  for (let i = 1; i < names.length; i++) {
    const name = names[i];
    if (name.length > longest.length) longest = name;
  }

  return longest;
};`,
    explanation: `Vogliamo trovare il nome con piu caratteri dentro un array.

Passaggi:
1. Se l'array e vuoto, restituiamo subito una stringa vuota.
2. Usiamo il primo nome come valore piu lungo trovato finora.
3. Confrontiamo la lunghezza degli altri nomi con quella del nome salvato.
4. Quando troviamo un nome piu lungo, aggiorniamo la variabile.

Alla fine restituiamo il nome piu lungo trovato durante il controllo.`,
    hints: [
      'Tieni in una variabile il nome piu lungo trovato finora e aggiornala quando ne trovi uno piu lungo.',
      'Confronta i nomi usando la proprieta `.length`.',
    ],
    tests: [
      {
        args: [['Anna', 'Giorgio', 'Silvia']],
        expected: 'Giorgio',
        message: 'Giorgio e il nome piu lungo',
      },
      {
        args: [['Marta']],
        expected: 'Marta',
        message: 'Marta e il nome piu lungo',
      },
      {
        args: [[]],
        expected: '',
        message: 'array vuoto restituisce stringa vuota',
      },
    ],
  },
  {
    id: 'umano-01',
    level: 'umano',
    title: 'Determina se un numero e pari',
    prompt:
      'Scrivi una funzione che riceve un numero e restituisce true se il numero e pari, altrimenti false.',
    functionName: 'isEven',
    starterCode: `const isEven = num => {

};`,
    solution: `const isEven = num => num % 2 === 0;`,
    explanation:
      `Vogliamo capire se un numero e divisibile per 2 senza resto.

Usiamo l'operatore modulo ` +
      '`%`' +
      `, che restituisce il resto della divisione. Se ` +
      '`num % 2`' +
      ` vale 0, significa che il numero e pari; altrimenti e dispari.

Alla fine la funzione restituisce un valore booleano: true per i numeri pari, false per quelli dispari.`,
    hints: [
      'Chiediti se dividendo il numero per 2 rimane un resto.',
      "L'operatore `%` serve proprio a leggere il resto di una divisione.",
    ],
    tests: [
      { args: [4], expected: true, message: '4 dovrebbe essere pari' },
      { args: [3], expected: false, message: '3 non dovrebbe essere pari' },
      { args: [0], expected: true, message: '0 dovrebbe essere pari' },
    ],
  },
  {
    id: 'umano-02',
    level: 'umano',
    title: 'Determina se una stringa e vuota',
    prompt:
      'Scrivi una funzione che riceve una stringa e restituisce true se e vuota, altrimenti false.',
    functionName: 'isEmpty',
    starterCode: `const isEmpty = str => {

};`,
    solution: `const isEmpty = str => !str;`,
    explanation:
      `Vogliamo distinguere una stringa vuota da una stringa che contiene del testo.

In JavaScript una stringa vuota viene considerata un valore "falsy". Usando ` +
      '`!str`' +
      ` invertiamo questo comportamento: se la stringa e vuota otteniamo true, se contiene testo otteniamo false.

Alla fine la funzione risponde alla domanda: questa stringa e vuota?`,
    hints: [
      'Una stringa vuota non contiene caratteri, quindi puoi controllarla in modo diretto.',
      'Puoi usare `.length` oppure sfruttare il fatto che `""` e un valore falsy.',
    ],
    tests: [
      {
        args: [''],
        expected: true,
        message: 'stringa vuota dovrebbe tornare true',
      },
      {
        args: ['ciao'],
        expected: false,
        message: 'stringa non vuota dovrebbe tornare false',
      },
    ],
  },
  {
    id: 'umano-03',
    level: 'umano',
    title: 'Restituisci la lunghezza di una stringa',
    prompt:
      'Scrivi una funzione che riceve una stringa e restituisce il numero dei suoi caratteri.',
    functionName: 'stringLength',
    starterCode: `const stringLength = str => {

};`,
    solution: `const stringLength = str => str.length;`,
    explanation:
      `Vogliamo sapere quanti caratteri contiene una stringa.

Le stringhe hanno gia una proprieta ` +
      '`length`' +
      ` che contiene questa informazione. Non dobbiamo contarli manualmente: leggiamo quel valore e lo restituiamo.

Alla fine otteniamo un numero, ad esempio 4 per la stringa "ciao".`,
    hints: [
      'Non serve un ciclo: JavaScript conosce gia la lunghezza di una stringa.',
      'La proprieta da leggere e `.length`.',
    ],
    tests: [
      { args: ['ciao'], expected: 4, message: "lunghezza di 'ciao' e 4" },
      { args: [''], expected: 0, message: 'lunghezza di stringa vuota e 0' },
    ],
  },
  {
    id: 'umano-04',
    level: 'umano',
    title: 'Restituisci il doppio di un numero',
    prompt:
      'Scrivi una funzione che riceve un numero e restituisce il suo doppio.',
    functionName: 'double',
    starterCode: `const double = num => {

};`,
    solution: `const double = num => num * 2;`,
    explanation: `Vogliamo calcolare il doppio del numero ricevuto.

La soluzione traduce direttamente il problema in codice: moltiplichiamo il numero per 2. Non servono condizioni o cicli, perche il risultato dipende solo da una moltiplicazione.

Alla fine la funzione restituisce il nuovo numero calcolato.`,
    hints: ['Il doppio di un numero si ottiene moltiplicandolo per 2.'],
    tests: [
      { args: [5], expected: 10, message: 'doppio di 5 e 10' },
      { args: [0], expected: 0, message: 'doppio di 0 e 0' },
    ],
  },
  {
    id: 'umano-05',
    level: 'umano',
    title: 'Determina se un numero e positivo',
    prompt:
      'Scrivi una funzione che riceve un numero e restituisce true se e maggiore di zero.',
    functionName: 'isPositive',
    starterCode: `const isPositive = num => {

};`,
    solution: `const isPositive = num => num > 0;`,
    explanation:
      `Vogliamo verificare se un numero e maggiore di zero.

Usiamo il confronto ` +
      '`num > 0`' +
      `. Se il confronto e vero, il numero e positivo. In questa soluzione 0 non viene considerato positivo, perche non e maggiore di 0.

Alla fine la funzione restituisce true solo per i numeri positivi.`,
    hints: [
      'Confronta il numero con 0.',
      'La funzione deve restituire direttamente il risultato di una domanda vero/falso.',
    ],
    tests: [
      { args: [5], expected: true, message: '5 e positivo' },
      { args: [-3], expected: false, message: '-3 non e positivo' },
      { args: [0], expected: false, message: '0 non e positivo' },
    ],
  },
  {
    id: 'umano-06',
    level: 'umano',
    title: 'Concatena due stringhe',
    prompt:
      'Scrivi una funzione che riceve due stringhe e restituisce una nuova stringa ottenuta unendole.',
    functionName: 'concatenate',
    starterCode: `const concatenate = (str1, str2) => {

};`,
    solution: `const concatenate = (str1, str2) => str1 + str2;`,
    explanation:
      `Vogliamo ottenere una sola stringa partendo da due stringhe separate.

Quando usiamo l'operatore ` +
      '`+`' +
      ` con le stringhe, JavaScript le concatena, cioe le attacca una dopo l'altra. In questa soluzione non aggiungiamo spazi automaticamente: il risultato dipende esattamente dalle due stringhe ricevute.

Alla fine la funzione restituisce la stringa unita.`,
    hints: [
      'Il risultato deve contenere la prima stringa seguita dalla seconda.',
      "Con le stringhe, l'operatore `+` non somma: unisce i testi.",
    ],
    tests: [
      {
        args: ['ciao', 'mondo'],
        expected: 'ciaomondo',
        message: "concatenazione di 'ciao' e 'mondo'",
      },
      {
        args: ['', 'test'],
        expected: 'test',
        message: 'concatenazione con stringa vuota',
      },
    ],
  },
  {
    id: 'umano-07',
    level: 'umano',
    title: 'Determina se un array e vuoto',
    prompt:
      'Scrivi una funzione che riceve un array e restituisce true se non contiene elementi.',
    functionName: 'isArrayEmpty',
    starterCode: `const isArrayEmpty = arr => {

};`,
    solution: `const isArrayEmpty = arr => arr.length === 0;`,
    explanation:
      `Vogliamo capire se un array non contiene elementi.

Gli array hanno la proprieta ` +
      '`length`' +
      `, che indica quanti elementi ci sono dentro. Se ` +
      '`arr.length`' +
      ` vale 0, l'array e vuoto; se vale un numero maggiore di 0, contiene almeno un elemento.

Alla fine la funzione restituisce true solo quando l'array e vuoto.`,
    hints: [
      'Un array vuoto ha zero elementi.',
      'Controlla il valore di `arr.length`.',
    ],
    tests: [
      {
        args: [[]],
        expected: true,
        message: 'array vuoto dovrebbe tornare true',
      },
      {
        args: [[1, 2]],
        expected: false,
        message: 'array non vuoto dovrebbe tornare false',
      },
    ],
  },
  {
    id: 'umano-08',
    level: 'umano',
    title: 'Restituisci il primo elemento di un array',
    prompt:
      'Scrivi una funzione che riceve un array e restituisce il primo elemento.',
    functionName: 'first',
    starterCode: `const first = arr => {

};`,
    solution: `const first = arr => arr[0];`,
    explanation:
      `Vogliamo prendere il primo elemento contenuto in un array.

Negli array gli indici partono da 0, quindi il primo elemento si trova in posizione ` +
      '`arr[0]`' +
      `. La funzione legge quel valore e lo restituisce direttamente.

Alla fine otteniamo il primo elemento dell'array ricevuto.`,
    hints: [
      'Negli array il primo elemento non e in posizione 1.',
      'Gli indici partono da 0, quindi guarda `arr[0]`.',
    ],
    tests: [
      {
        args: [[1, 2, 3]],
        expected: 1,
        message: 'primo elemento di [1,2,3] e 1',
      },
      { args: [[5]], expected: 5, message: 'primo elemento di [5] e 5' },
    ],
  },
  {
    id: 'umano-09',
    level: 'umano',
    title: 'Restituisci la somma di due numeri',
    prompt:
      'Scrivi una funzione che riceve due numeri e restituisce la loro somma.',
    functionName: 'sum',
    starterCode: `const sum = (a, b) => {

};`,
    solution: `const sum = (a, b) => a + b;`,
    explanation:
      `Vogliamo sommare i due numeri ricevuti dalla funzione.

La soluzione usa l'operatore ` +
      '`+`' +
      ` tra i due parametri. In questo caso i valori sono numeri, quindi JavaScript esegue una somma matematica.

Alla fine la funzione restituisce il risultato della somma.`,
    hints: [
      'Devi combinare i due parametri numerici in un solo risultato.',
      "Con i numeri, l'operatore `+` esegue una somma matematica.",
    ],
    tests: [
      { args: [3, 4], expected: 7, message: 'somma di 3 e 4 e 7' },
      { args: [-2, 5], expected: 3, message: 'somma di -2 e 5 e 3' },
    ],
  },
  {
    id: 'umano-10',
    level: 'umano',
    title: 'Restituisci il valore assoluto di un numero',
    prompt:
      'Scrivi una funzione che riceve un numero e restituisce il suo valore assoluto.',
    functionName: 'absolute',
    starterCode: `const absolute = num => {

};`,
    solution: `const absolute = num => {
  if (num < 0) return -num;
  return num;
};`,
    explanation:
      `Vogliamo ottenere la distanza del numero da zero, senza considerare il segno.

Passaggi:
1. Se il numero e negativo, lo trasformiamo nel suo opposto con ` +
      '`-num`' +
      `.
2. Se il numero e gia positivo o vale 0, lo lasciamo com'e.

Alla fine la funzione restituisce sempre un numero positivo o 0.`,
    hints: [
      'Dividi il ragionamento in due casi: numero negativo e numero non negativo.',
      'Se il numero e negativo, il suo valore assoluto si ottiene cambiando il segno.',
    ],
    tests: [
      { args: [-5], expected: 5, message: 'assoluto di -5 e 5' },
      { args: [3], expected: 3, message: 'assoluto di 3 e 3' },
      { args: [0], expected: 0, message: 'assoluto di 0 e 0' },
    ],
  },
  {
    id: 'esperto-01',
    level: 'esperto',
    title: 'Determina se un numero e primo',
    prompt:
      'Scrivi una funzione che riceve un numero e restituisce true se e primo.',
    functionName: 'isPrime',
    starterCode: `const isPrime = num => {

};`,
    solution: `const isPrime = num => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};`,
    explanation:
      `Vogliamo capire se un numero ha divisori oltre a 1 e se stesso.

Passaggi:
1. I numeri minori di 2 non sono primi, quindi restituiamo subito false.
2. Proviamo a dividere il numero per possibili divisori partendo da 2.
3. Se troviamo un divisore con resto 0, il numero non e primo.
4. Usiamo ` +
      '`Math.sqrt(num)`' +
      ` come limite per evitare controlli inutili: se esiste un divisore grande, ne esiste anche uno piu piccolo gia controllato.

Alla fine, se non troviamo divisori, il numero e primo.`,
    hints: [
      'Prima gestisci i numeri minori di 2: non sono numeri primi.',
      'Poi prova a cercare un divisore: se `num % i` vale 0, hai trovato un motivo per restituire false.',
    ],
    tests: [
      { args: [2], expected: true, message: '2 e primo' },
      { args: [17], expected: true, message: '17 e primo' },
      { args: [1], expected: false, message: '1 non e primo' },
      { args: [4], expected: false, message: '4 non e primo' },
    ],
  },
  {
    id: 'esperto-02',
    level: 'esperto',
    title: "Restituisci l'indice di un elemento in un array",
    prompt:
      'Scrivi una funzione che riceve un array e un elemento, poi restituisce la posizione del primo elemento uguale. Se non lo trova, restituisce -1.',
    functionName: 'indexOf',
    starterCode: `const indexOf = (arr, element) => {

};`,
    solution: `const indexOf = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];

    if (currentEl === element) return i;
  }

  return -1;
};`,
    explanation:
      `Vogliamo trovare la posizione di un elemento dentro un array.

Passaggi:
1. Controlliamo gli elementi uno alla volta.
2. Quando l'elemento corrente e uguale a quello cercato, restituiamo subito il suo indice.
3. Se arriviamo alla fine senza trovare nulla, restituiamo ` +
      '`-1`' +
      `.

Alla fine la funzione si comporta come una ricerca: restituisce la posizione se trova l'elemento, altrimenti -1.`,
    hints: [
      "Scorri l'array dall'inizio alla fine controllando un elemento alla volta.",
      "Quando trovi l'elemento cercato, l'indice giusto e la variabile del ciclo.",
    ],
    tests: [
      {
        args: [[1, 2, 3], 2],
        expected: 1,
        message: 'indice di 2 in [1,2,3] e 1',
      },
      {
        args: [[5, 10, 15], 5],
        expected: 0,
        message: 'indice di 5 in [5,10,15] e 0',
      },
      {
        args: [[1, 2, 3], 99],
        expected: -1,
        message: 'elemento non trovato dovrebbe tornare -1',
      },
    ],
  },
  {
    id: 'esperto-03',
    level: 'esperto',
    title: 'Filtra un array mantenendo solo i numeri pari',
    prompt:
      'Scrivi una funzione che riceve un array di numeri e restituisce un nuovo array con solo i numeri pari.',
    functionName: 'filterEven',
    starterCode: `const filterEven = arr => {

};`,
    solution: `const filterEven = arr => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) result.push(num);
  }

  return result;
};`,
    explanation:
      `Vogliamo creare un nuovo array che contenga solo i numeri pari.

Passaggi:
1. Prepariamo un array vuoto per il risultato.
2. Controlliamo ogni numero con l'operatore modulo.
3. Se ` +
      '`num % 2`' +
      ` vale 0, il numero e pari.
4. Quando il numero e pari, lo aggiungiamo al risultato con ` +
      '`.push()`' +
      `.

Alla fine restituiamo il nuovo array filtrato.`,
    hints: [
      'Crea un array di risultato e inserisci solo i numeri che rispettano la condizione.',
      'Un numero pari ha resto 0 quando viene diviso per 2.',
    ],
    tests: [
      {
        args: [[1, 2, 3, 4]],
        expected: [2, 4],
        message: 'filtrando [1,2,3,4] restituisce [2,4]',
      },
      {
        args: [[1, 3, 5]],
        expected: [],
        message: 'filtrando [1,3,5] restituisce []',
      },
    ],
  },
  {
    id: 'esperto-04',
    level: 'esperto',
    title: 'Determina se una stringa e un palindromo',
    prompt:
      'Scrivi una funzione che riceve una stringa e restituisce true se puo essere letta allo stesso modo da sinistra a destra e da destra a sinistra.',
    functionName: 'isPalindrome',
    starterCode: `const isPalindrome = str => {

};`,
    solution: `const isPalindrome = str => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};`,
    explanation: `Vogliamo verificare se una stringa si legge allo stesso modo da sinistra a destra e da destra a sinistra.

Passaggi:
1. Confrontiamo il primo carattere con l'ultimo.
2. Poi confrontiamo il secondo con il penultimo, e cosi via.
3. Se troviamo due caratteri diversi, possiamo dire subito che non e un palindromo.
4. Non serve controllare tutta la stringa: basta arrivare fino a meta.

Alla fine, se nessun confronto fallisce, la stringa e palindroma.`,
    hints: [
      'Confronta le lettere a coppie: prima con ultima, seconda con penultima, e cosi via.',
      'Per leggere la lettera opposta a `str[i]`, ragiona su `str.length - 1 - i`.',
    ],
    tests: [
      { args: ['aba'], expected: true, message: "'aba' e un palindromo" },
      { args: ['abc'], expected: false, message: "'abc' non e un palindromo" },
      { args: ['a'], expected: true, message: "'a' e un palindromo" },
    ],
  },
  {
    id: 'esperto-05',
    level: 'esperto',
    title: 'Restituisci la somma di tutti gli elementi di un array',
    prompt:
      'Scrivi una funzione che riceve un array di numeri e restituisce la somma totale.',
    functionName: 'sumArray',
    starterCode: `const sumArray = arr => {

};`,
    solution: `const sumArray = arr => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    result += num;
  }

  return result;
};`,
    explanation: `Vogliamo sommare tutti i numeri presenti in un array.

Passaggi:
1. Prepariamo una variabile che parte da 0, perche all'inizio non abbiamo ancora sommato nulla.
2. Aggiungiamo ogni numero dell'array al totale.
3. La variabile cresce passo dopo passo fino a contenere la somma completa.

Alla fine restituiamo il totale calcolato.`,
    hints: [
      'Prepara una variabile totale che parte da 0.',
      "Durante il ciclo aggiungi ogni numero dell'array al totale.",
    ],
    tests: [
      { args: [[1, 2, 3]], expected: 6, message: 'somma di [1,2,3] e 6' },
      { args: [[10, 20]], expected: 30, message: 'somma di [10,20] e 30' },
      { args: [[]], expected: 0, message: 'somma di array vuoto e 0' },
    ],
  },
  {
    id: 'esperto-06',
    level: 'esperto',
    title: 'Determina se due array hanno gli stessi elementi',
    prompt:
      'Scrivi una funzione che riceve due array e restituisce true se hanno gli stessi elementi nello stesso ordine.',
    functionName: 'arraysEqual',
    starterCode: `const arraysEqual = (arr1, arr2) => {

};`,
    solution: `const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};`,
    explanation: `Vogliamo verificare se due array hanno gli stessi elementi nello stesso ordine.

Passaggi:
1. Se gli array hanno lunghezze diverse, non possono essere uguali.
2. Se hanno la stessa lunghezza, confrontiamo gli elementi posizione per posizione.
3. Se troviamo una differenza, restituiamo subito false.

Alla fine restituiamo true solo se tutti gli elementi corrispondono nella stessa posizione.`,
    hints: [
      'Prima controlla la lunghezza: due array con lunghezze diverse non possono essere uguali.',
      'Se le lunghezze coincidono, confronta gli elementi con lo stesso indice.',
    ],
    tests: [
      {
        args: [
          [1, 2, 3],
          [1, 2, 3],
        ],
        expected: true,
        message: '[1,2,3] e [1,2,3] sono uguali',
      },
      {
        args: [
          [1, 2],
          [2, 1],
        ],
        expected: false,
        message: '[1,2] e [2,1] non sono uguali',
      },
      { args: [[], []], expected: true, message: 'array vuoti sono uguali' },
    ],
  },
  {
    id: 'esperto-07',
    level: 'esperto',
    title: 'Raddoppia ogni elemento di un array',
    prompt:
      'Scrivi una funzione che riceve un array di numeri e restituisce un array con ogni elemento raddoppiato.',
    functionName: 'doubleArray',
    starterCode: `const doubleArray = arr => {

};`,
    solution: `const doubleArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};`,
    explanation: `Vogliamo raddoppiare ogni numero contenuto nell'array.

Passaggi:
1. Leggiamo ogni elemento dell'array.
2. Moltiplichiamo quel valore per 2.
3. Salviamo il nuovo valore nella stessa posizione dell'array.

Alla fine restituiamo l'array con tutti i numeri raddoppiati. Questa soluzione modifica direttamente l'array ricevuto.`,
    hints: [
      "Scorri l'array con un ciclo e lavora su un elemento alla volta.",
      "Per cambiare un valore dentro l'array, assegna il nuovo valore nella stessa posizione.",
    ],
    tests: [
      {
        args: [[1, 2, 3]],
        expected: [2, 4, 6],
        message: 'raddoppiando [1,2,3] restituisce [2,4,6]',
      },
      {
        args: [[5]],
        expected: [10],
        message: 'raddoppiando [5] restituisce [10]',
      },
    ],
  },
  {
    id: 'esperto-08',
    level: 'esperto',
    title: 'Ordina un array di numeri',
    prompt:
      'Scrivi una funzione che riceve un array di numeri e lo restituisce ordinato dal piu piccolo al piu grande.',
    functionName: 'sort',
    starterCode: `const sort = arr => {

};`,
    solution: `const sort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      if (current > next) {
        const temp = current;
        arr[j] = next;
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};`,
    explanation: `Vogliamo ordinare i numeri dal piu piccolo al piu grande usando una versione semplice del bubble sort.

Passaggi:
1. Confrontiamo coppie di elementi vicini.
2. Se il primo elemento e piu grande del secondo, li scambiamo.
3. Ripetiamo questi confronti piu volte, cosi i numeri piu grandi si spostano verso la fine dell'array.
4. Lo scambio usa una variabile temporanea, per non perdere uno dei due valori.

Alla fine l'array risulta ordinato in modo crescente.`,
    hints: [
      "Confronta coppie di numeri vicini: se sono nell'ordine sbagliato, scambiali.",
      'Ripeti i confronti piu volte, perche un solo passaggio non basta sempre a ordinare tutto.',
    ],
    tests: [
      {
        args: [[3, 1, 2]],
        expected: [1, 2, 3],
        message: 'ordinando [3,1,2] restituisce [1,2,3]',
      },
      { args: [[5]], expected: [5], message: 'ordinando [5] restituisce [5]' },
      {
        args: [[3, -1, 2, 2]],
        expected: [-1, 2, 2, 3],
        message: 'funziona con negativi e duplicati',
      },
    ],
  },
  {
    id: 'esperto-09',
    level: 'esperto',
    title: 'Restituisci il numero piu grande di un array',
    prompt:
      'Scrivi una funzione che riceve un array di numeri e restituisce il numero piu grande.',
    functionName: 'max',
    starterCode: `const max = arr => {

};`,
    solution: `const max = arr => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0];

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if (num > max) max = num;
  }

  return max;
};`,
    explanation: `Vogliamo trovare il numero piu grande dentro un array.

Passaggi:
1. Se l'array e vuoto, restituiamo -1 come valore speciale.
2. Usiamo il primo elemento come massimo iniziale.
3. Confrontiamo gli altri numeri con il massimo salvato.
4. Quando troviamo un numero piu grande, aggiorniamo la variabile.

Alla fine restituiamo il valore piu grande trovato.`,
    hints: [
      'Tieni in una variabile il numero piu grande trovato finora.',
      'Confronta ogni numero con quel valore e aggiornalo solo quando trovi un numero piu grande.',
    ],
    tests: [
      { args: [[1, 5, 3]], expected: 5, message: 'massimo di [1,5,3] e 5' },
      { args: [[10]], expected: 10, message: 'massimo di [10] e 10' },
    ],
  },
  {
    id: 'esperto-10',
    level: 'esperto',
    title: 'Determina se un array contiene un numero specifico',
    prompt:
      'Scrivi una funzione che riceve un array e un numero, poi restituisce true se il numero e presente.',
    functionName: 'includes',
    starterCode: `const includes = (arr, num) => {

};`,
    solution: `const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }

  return false;
};`,
    explanation: `Vogliamo sapere se un numero specifico e presente dentro un array.

Passaggi:
1. Controlliamo gli elementi dell'array uno alla volta.
2. Se troviamo un elemento uguale al numero cercato, restituiamo subito true.
3. Se il controllo arriva alla fine senza trovare il numero, restituiamo false.

Alla fine la funzione risponde con un booleano: true se il numero esiste nell'array, false se non esiste.`,
    hints: [
      "Scorri l'array e confronta ogni elemento con il numero cercato.",
      'Se trovi una corrispondenza puoi restituire subito true; se arrivi alla fine, restituisci false.',
    ],
    tests: [
      { args: [[1, 2, 3], 2], expected: true, message: '[1,2,3] contiene 2' },
      {
        args: [[1, 2, 3], 5],
        expected: false,
        message: '[1,2,3] non contiene 5',
      },
    ],
  },
];

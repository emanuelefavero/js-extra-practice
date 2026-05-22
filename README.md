# JS Extra Practice

Raccolta interattiva di esercizi JavaScript nata durante una lezione di un
corso Web Development, con editor, test, soluzioni e spiegazioni in italiano.

## Obiettivo

Il progetto serve per ripassare JavaScript in modo pratico, partendo da piccoli
esercizi su funzioni, condizioni, cicli e array. L'app permette di:

- leggere la traccia e scrivere la soluzione direttamente nel browser;
- aprire la soluzione quando serve;
- leggere una spiegazione breve;
- eseguire i test e tenere traccia degli esercizi completati.

## Contesto della lezione

Il contesto di partenza e una fase introduttiva su JavaScript fundamentals:
funzioni, condizioni, cicli, array e controlli di base. Per questo il progetto
usa JavaScript vanilla e mantiene le soluzioni semplici, anche se usa Vite e
CodeMirror per avere un editor comodo nel browser.

Gli esercizi inclusi sono:

- livello `snack`: 5 esercizi;
- livello `umano`: 10 esercizi;
- livello `esperto`: 10 esercizi.

I livelli `maestro` e `mostro finale` restano fuori da questa versione perche
richiedono ragionamenti piu avanzati.

## Come avviare il progetto

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

Per creare la build statica:

```bash
npm run build
```

## Deploy su GitHub Pages

Il progetto viene pubblicato tramite GitHub Actions. Nelle impostazioni della
repository, in **Pages**, seleziona **GitHub Actions** come source di deploy.

Ogni push su `main` esegue `npm ci`, `npm run build` e pubblica la cartella
`dist`.

## Come usare l'app

Nella pagina puoi:

- filtrare gli esercizi per livello;
- cercare per titolo, traccia o nome funzione;
- scrivere il codice nell'editor;
- eseguire i test con `Esegui test`;
- vedere l'output con test passati o falliti;
- aprire ogni soluzione con il toggle "Mostra soluzione e spiegazione";
- salvare automaticamente il codice e il completamento nel browser.

## Stato locale

Il codice scritto e gli esercizi completati vengono salvati in `localStorage`.
Non c'e autenticazione e non c'e sincronizzazione tra dispositivi.

## Note tecniche

- La pagina e una single-page app Vite.
- I dati degli esercizi sono in `src/exercises.js`.
- Il rendering usa DOM e template string, senza framework.
- CodeMirror 6 fornisce editor e syntax highlighting.
- Le soluzioni usano funzioni, `if`, cicli `for`, array e controlli semplici,
  coerenti con una fase introduttiva di studio di JavaScript.

## License

- [MIT](LICENSE.md)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#js-extra-practice)

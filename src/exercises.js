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
    explanation:
      "Usiamo l'operatore + per unire il saluto, una virgola, il nome e il punto esclamativo. Ogni pezzo diventa parte della stringa finale.",
    tests: [
      { args: ['Ciao', 'Anna'], expected: 'Ciao, Anna!', message: "saluto con 'Ciao' e 'Anna'" },
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
    prompt: 'Scrivi una funzione che riceve un array di nomi e restituisce un nuovo array con la prima lettera di ogni nome.',
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
      'Creiamo un array vuoto per le iniziali. Poi scorriamo i nomi e aggiungiamo il carattere in posizione 0 di ogni stringa.',
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
      "Controlliamo il primo carattere di ogni nome con name[0]. Se e uguale alla lettera cercata, aggiungiamo quel nome all'array risultato.",
    tests: [
      {
        args: [['Bruno', 'Anna', 'Bianca'], 'B'],
        expected: ['Bruno', 'Bianca'],
        message: 'nomi che iniziano con B',
      },
      { args: [['Anna', 'Sofia'], 'M'], expected: [], message: 'nessun nome che inizia con M' },
    ],
  },
  {
    id: 'snack-04',
    level: 'snack',
    title: 'Conta il numero di vocali in una stringa',
    prompt: 'Scrivi una funzione che riceve una stringa e restituisce quante vocali contiene.',
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
      'Prepariamo una stringa con tutte le vocali e un contatore. Per ogni carattere della stringa usiamo includes per controllare se e una vocale; se lo e, aumentiamo il contatore.',
    tests: [
      { args: ['ciao'], expected: 3, message: "'ciao' contiene 3 vocali" },
      { args: ['JS'], expected: 0, message: "'JS' non contiene vocali" },
      { args: ['Esercizi'], expected: 4, message: "'Esercizi' contiene 4 vocali" },
    ],
  },
  {
    id: 'snack-05',
    level: 'snack',
    title: 'Restituisci il nome piu lungo',
    prompt: 'Scrivi una funzione che riceve un array di nomi e restituisce il nome piu lungo.',
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
    explanation:
      'Partiamo dal primo nome come valore piu lungo. Poi confrontiamo la lunghezza degli altri nomi e aggiorniamo la variabile quando troviamo un nome piu lungo.',
    tests: [
      { args: [['Anna', 'Giorgio', 'Silvia']], expected: 'Giorgio', message: 'Giorgio e il nome piu lungo' },
      { args: [['Marta']], expected: 'Marta', message: 'Marta e il nome piu lungo' },
      { args: [[]], expected: '', message: 'array vuoto restituisce stringa vuota' },
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
      "Usiamo l'operatore %, che restituisce il resto della divisione. Se un numero diviso per 2 ha resto 0, allora e pari.",
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
      'Una stringa vuota vale false quando viene convertita in booleano. Con ! invertiamo il valore: stringa vuota diventa true, stringa piena diventa false.',
    tests: [
      { args: [''], expected: true, message: 'stringa vuota dovrebbe tornare true' },
      { args: ['ciao'], expected: false, message: 'stringa non vuota dovrebbe tornare false' },
    ],
  },
  {
    id: 'umano-03',
    level: 'umano',
    title: 'Restituisci la lunghezza di una stringa',
    prompt: 'Scrivi una funzione che riceve una stringa e restituisce il numero dei suoi caratteri.',
    functionName: 'stringLength',
    starterCode: `const stringLength = str => {

};`,
    solution: `const stringLength = str => str.length;`,
    explanation:
      'La proprieta length contiene il numero di caratteri della stringa. La funzione restituisce direttamente quel valore.',
    tests: [
      { args: ['ciao'], expected: 4, message: "lunghezza di 'ciao' e 4" },
      { args: [''], expected: 0, message: 'lunghezza di stringa vuota e 0' },
    ],
  },
  {
    id: 'umano-04',
    level: 'umano',
    title: 'Restituisci il doppio di un numero',
    prompt: 'Scrivi una funzione che riceve un numero e restituisce il suo doppio.',
    functionName: 'double',
    starterCode: `const double = num => {

};`,
    solution: `const double = num => num * 2;`,
    explanation:
      'Per ottenere il doppio basta moltiplicare il numero per 2. La funzione restituisce il risultato della moltiplicazione.',
    tests: [
      { args: [5], expected: 10, message: 'doppio di 5 e 10' },
      { args: [0], expected: 0, message: 'doppio di 0 e 0' },
    ],
  },
  {
    id: 'umano-05',
    level: 'umano',
    title: 'Determina se un numero e positivo',
    prompt: 'Scrivi una funzione che riceve un numero e restituisce true se e maggiore di zero.',
    functionName: 'isPositive',
    starterCode: `const isPositive = num => {

};`,
    solution: `const isPositive = num => num > 0;`,
    explanation:
      'Confrontiamo il numero con 0 usando >. In questa soluzione 0 non e considerato positivo, perche non e maggiore di 0.',
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
      "L'operatore +, quando viene usato con le stringhe, le unisce una dopo l'altra. La funzione restituisce la stringa finale.",
    tests: [
      { args: ['ciao', 'mondo'], expected: 'ciaomondo', message: "concatenazione di 'ciao' e 'mondo'" },
      { args: ['', 'test'], expected: 'test', message: 'concatenazione con stringa vuota' },
    ],
  },
  {
    id: 'umano-07',
    level: 'umano',
    title: 'Determina se un array e vuoto',
    prompt: 'Scrivi una funzione che riceve un array e restituisce true se non contiene elementi.',
    functionName: 'isArrayEmpty',
    starterCode: `const isArrayEmpty = arr => {

};`,
    solution: `const isArrayEmpty = arr => arr.length === 0;`,
    explanation:
      'Anche gli array hanno la proprieta length. Se length e 0, significa che non ci sono elementi dentro.',
    tests: [
      { args: [[]], expected: true, message: 'array vuoto dovrebbe tornare true' },
      { args: [[1, 2]], expected: false, message: 'array non vuoto dovrebbe tornare false' },
    ],
  },
  {
    id: 'umano-08',
    level: 'umano',
    title: 'Restituisci il primo elemento di un array',
    prompt: 'Scrivi una funzione che riceve un array e restituisce il primo elemento.',
    functionName: 'first',
    starterCode: `const first = arr => {

};`,
    solution: `const first = arr => arr[0];`,
    explanation: 'Negli array il primo elemento ha indice 0. Per questo leggiamo arr[0] e lo restituiamo.',
    tests: [
      { args: [[1, 2, 3]], expected: 1, message: 'primo elemento di [1,2,3] e 1' },
      { args: [[5]], expected: 5, message: 'primo elemento di [5] e 5' },
    ],
  },
  {
    id: 'umano-09',
    level: 'umano',
    title: 'Restituisci la somma di due numeri',
    prompt: 'Scrivi una funzione che riceve due numeri e restituisce la loro somma.',
    functionName: 'sum',
    starterCode: `const sum = (a, b) => {

};`,
    solution: `const sum = (a, b) => a + b;`,
    explanation: "Sommiamo i due parametri con l'operatore +. Il valore calcolato viene restituito dalla funzione.",
    tests: [
      { args: [3, 4], expected: 7, message: 'somma di 3 e 4 e 7' },
      { args: [-2, 5], expected: 3, message: 'somma di -2 e 5 e 3' },
    ],
  },
  {
    id: 'umano-10',
    level: 'umano',
    title: 'Restituisci il valore assoluto di un numero',
    prompt: 'Scrivi una funzione che riceve un numero e restituisce il suo valore assoluto.',
    functionName: 'absolute',
    starterCode: `const absolute = num => {

};`,
    solution: `const absolute = num => {
  if (num < 0) return -num;
  return num;
};`,
    explanation:
      'Se il numero e negativo, lo trasformiamo nel suo opposto con -num. Se e gia positivo o zero, lo restituiamo senza modificarlo.',
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
    prompt: 'Scrivi una funzione che riceve un numero e restituisce true se e primo.',
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
      'Un numero primo e divisibile solo per 1 e per se stesso. Controlliamo i divisori da 2 fino alla radice quadrata del numero: se ne troviamo uno, il numero non e primo.',
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
      "Scorriamo l'array con un ciclo for. Appena troviamo un elemento uguale a quello cercato, restituiamo il suo indice; se il ciclo finisce senza trovare nulla, restituiamo -1.",
    tests: [
      { args: [[1, 2, 3], 2], expected: 1, message: 'indice di 2 in [1,2,3] e 1' },
      { args: [[5, 10, 15], 5], expected: 0, message: 'indice di 5 in [5,10,15] e 0' },
      { args: [[1, 2, 3], 99], expected: -1, message: 'elemento non trovato dovrebbe tornare -1' },
    ],
  },
  {
    id: 'esperto-03',
    level: 'esperto',
    title: 'Filtra un array mantenendo solo i numeri pari',
    prompt: 'Scrivi una funzione che riceve un array di numeri e restituisce un nuovo array con solo i numeri pari.',
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
      "Creiamo un array vuoto per il risultato. Poi controlliamo ogni numero: se il resto della divisione per 2 e 0, lo aggiungiamo con push.",
    tests: [
      { args: [[1, 2, 3, 4]], expected: [2, 4], message: 'filtrando [1,2,3,4] restituisce [2,4]' },
      { args: [[1, 3, 5]], expected: [], message: 'filtrando [1,3,5] restituisce []' },
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
    explanation:
      'Confrontiamo il primo carattere con l ultimo, il secondo con il penultimo, e cosi via. Se troviamo una coppia diversa, la stringa non e palindroma.',
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
    prompt: 'Scrivi una funzione che riceve un array di numeri e restituisce la somma totale.',
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
    explanation:
      'Partiamo da una variabile result uguale a 0. A ogni giro del ciclo aggiungiamo il numero corrente, poi alla fine restituiamo il totale.',
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
    prompt: 'Scrivi una funzione che riceve due array e restituisce true se hanno gli stessi elementi nello stesso ordine.',
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
    explanation:
      'Prima controlliamo se le lunghezze sono diverse: in quel caso gli array non possono essere uguali. Poi confrontiamo gli elementi uno alla volta nella stessa posizione.',
    tests: [
      { args: [[1, 2, 3], [1, 2, 3]], expected: true, message: '[1,2,3] e [1,2,3] sono uguali' },
      { args: [[1, 2], [2, 1]], expected: false, message: '[1,2] e [2,1] non sono uguali' },
      { args: [[], []], expected: true, message: 'array vuoti sono uguali' },
    ],
  },
  {
    id: 'esperto-07',
    level: 'esperto',
    title: 'Raddoppia ogni elemento di un array',
    prompt: 'Scrivi una funzione che riceve un array di numeri e restituisce un array con ogni elemento raddoppiato.',
    functionName: 'doubleArray',
    starterCode: `const doubleArray = arr => {

};`,
    solution: `const doubleArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};`,
    explanation:
      "Scorriamo l'array e sostituiamo ogni elemento con il suo doppio. Questa versione modifica direttamente l'array ricevuto, cosa utile da notare quando si prova la funzione.",
    tests: [
      { args: [[1, 2, 3]], expected: [2, 4, 6], message: 'raddoppiando [1,2,3] restituisce [2,4,6]' },
      { args: [[5]], expected: [10], message: 'raddoppiando [5] restituisce [10]' },
    ],
  },
  {
    id: 'esperto-08',
    level: 'esperto',
    title: 'Ordina un array di numeri',
    prompt: 'Scrivi una funzione che riceve un array di numeri e lo restituisce ordinato dal piu piccolo al piu grande.',
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
    explanation:
      "Questa e una versione semplice del bubble sort. Confrontiamo coppie di elementi vicini e li scambiamo quando sono nell'ordine sbagliato, finche i numeri risultano ordinati.",
    tests: [
      { args: [[3, 1, 2]], expected: [1, 2, 3], message: 'ordinando [3,1,2] restituisce [1,2,3]' },
      { args: [[5]], expected: [5], message: 'ordinando [5] restituisce [5]' },
      { args: [[3, -1, 2, 2]], expected: [-1, 2, 2, 3], message: 'funziona con negativi e duplicati' },
    ],
  },
  {
    id: 'esperto-09',
    level: 'esperto',
    title: 'Restituisci il numero piu grande di un array',
    prompt: 'Scrivi una funzione che riceve un array di numeri e restituisce il numero piu grande.',
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
    explanation:
      'Usiamo il primo elemento come massimo iniziale. Poi scorriamo gli altri numeri e aggiorniamo max quando troviamo un valore piu grande.',
    tests: [
      { args: [[1, 5, 3]], expected: 5, message: 'massimo di [1,5,3] e 5' },
      { args: [[10]], expected: 10, message: 'massimo di [10] e 10' },
    ],
  },
  {
    id: 'esperto-10',
    level: 'esperto',
    title: 'Determina se un array contiene un numero specifico',
    prompt: 'Scrivi una funzione che riceve un array e un numero, poi restituisce true se il numero e presente.',
    functionName: 'includes',
    starterCode: `const includes = (arr, num) => {

};`,
    solution: `const includes = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }

  return false;
};`,
    explanation:
      "Controlliamo gli elementi dell'array uno alla volta. Se troviamo il numero cercato, restituiamo subito true; se arriviamo alla fine, restituiamo false.",
    tests: [
      { args: [[1, 2, 3], 2], expected: true, message: '[1,2,3] contiene 2' },
      { args: [[1, 2, 3], 5], expected: false, message: '[1,2,3] non contiene 5' },
    ],
  },
];

# Tpsit Appunti

- [stati css](https://2022.stateofcss.com/en-US/)
- [stato js](https://2022.stateofjs.com/en-US/)
- <img src="Logo/reactlogo.md" width=3% height=3%>[React Dev](https://react.dev)
- [digitalocean sito](https:/7digitalocean.com)
---
## Appunti generici
---
### Cos'è JSX?
```
JSX, acronimo di "JavaScript XML," è un'estensione di JavaScript comunemente utilizzata nei framework JavaScript come React per la creazione di interfacce utente (UI) per le applicazioni web.

JSX consente agli sviluppatori di definire la struttura e l'aspetto degli elementi dell'UI utilizzando una sintassi simile all'XML all'interno del codice JavaScript.
```

### Esempio JSX
```
|jsx |
const element = <h1>Ciao, mondo!</h1>;

| js |
const element = React.createElement("h1", null, "Ciao, mondo!");

In questo esempio, <h1>Ciao, mondo!</h1> è un elemento JSX che rappresenta un'intestazione HTML.
Puoi notare che sembra molto simile all'HTML, ma è incorporato direttamente nel codice JavaScript.

Quando si utilizza React o altre librerie/framework che supportano JSX, il codice JSX viene trasformato in JavaScript
puro durante la fase di compilazione o durante l'esecuzione del codice, il che lo rende compatibile con i browser.

L'utilizzo di JSX semplifica la creazione di componenti UI e rende il codice più leggibile e manutenibile per le applicazioni web complesse.
Inoltre, consente di sfruttare la potenza di JavaScript per la logica e la manipolazione dei dati insieme alla dichiarazione dell'UI.
```
---

# Tpsit Appunti   04/10/2023
---
## Multi framework
### Librerie suddivise :
- front end framework 
- rendering framework
- testing
- mobile e desktop
- buildtools
- monorepo tools
  
## Cos'è web pack?
Webpack è un potente strumento di automazione per la gestione e l'ottimizzazione delle risorse front-end in un'applicazione web.

Si tratta di un bundler, il che significa che è progettato per raccogliere, elaborare e organizzare una varietà di file, come JavaScript, CSS, immagini e altri asset, in modo che possano essere utilizzati efficientemente nell'applicazione web.

## web pack caratteristiche.
- Carica moduli
  
  ```Webpack permette di utilizzare il sistema di moduli di JavaScript (CommonJS, ES6 Modules, AMD, ecc.) per organizzare il codice in moduli separati e gestire le dipendenze tra di essi. Webpack si occupa di caricare i moduli necessari quando vengono richiesti.```
  
- è un Bundling
  
  ```Webpack può prendere diversi file JavaScript e combinarli in un unico file o più file, noti come "bundle". Questo è utile perché riduce il numero di richieste HTTP e ottimizza il caricamento delle risorse nel browser.```
  
- Trasforma tipi di file
  
  ```Puoi utilizzare i "caricatori" (loaders) di Webpack per trasformare diversi tipi di file,come convertire il CSS in JavaScript, ottimizzare le immagini, ecc.```

- Offre plugins
  
  ```Webpack offre una vasta gamma di plugin che consentono di eseguire varie attività come l'ottimizzazione del codice, l'iniezione di variabili d'ambiente, la generazione di file HTML, la gestione delle risorse e molto altro.```

- include un server di sviluppo
```Webpack include un server di sviluppo che offre il ricaricamento automatico della pagina (live reloading) e la possibilità di gestire le API di sviluppo (Hot Module Replacement) per un ambiente di sviluppo più efficiente.```

## React 

${\color{lightblue}React}$ , o ${\color{lightblue}React.js}$, è una popolare libreria ${\color{orange}Javascript}$ open-source sviluppata da Facebook. 

È utilizzata per la creazione di interfacce utente (UI) dinamiche e reattive per applicazioni web e mobile. 

${\color{lightblue}React}$ è particolarmente noto per la sua approccio alla costruzione delle UI basato su componenti.

- frontend integrato con altri framework
- quick start = condensato
- react come libreria è legato molto al concetto al single page application
- c'è bisogno di un tool per trasformare il codice sorgente in codice java script(node.js)
- React utilizza una sintassi chiamata JSX per definire la struttura dell'UI

### Cos'è JSX?

${\color{red}JSX}$ , acronimo di "JavaScript XML," è un'estensione di JavaScript comunemente utilizzata nei framework JavaScript come React per la creazione di interfacce utente (UI) per le applicazioni web.

${\color{red}JSX}$  consente agli sviluppatori di definire la struttura e l'aspetto degli elementi dell'UI utilizzando una sintassi simile all'XML all'interno del codice JavaScript.


### Esempio JSX

 ${\color{red}JSX}$ 
 
 ```const element = </h1>Ciao, mondo!</h1>```
 
${\color{orange}Javascript}$

```const element = React.createElement("h1", null, "Ciao, mondo!");```

In questo esempio, ```</h1>Ciao, mondo!</h1>```è un elemento JSX che rappresenta un'intestazione HTML.
E' molto simile all'HTML, ma è incorporato direttamente nel codice JavaScript.

Quando si utilizza React o altre librerie/framework che supportano JSX, il codice JSX viene trasformato in JavaScript
puro durante la fase di compilazione o durante l'esecuzione del codice, il che lo rende compatibile con i browser.

L'utilizzo di JSX semplifica la creazione di componenti UI e rende il codice più leggibile e manutenibile per le applicazioni web complesse.
Inoltre, consente di sfruttare la potenza di JavaScript per la logica e la manipolazione dei dati insieme alla dichiarazione dell'UI.

---

### Link utili

- [stati css](https://2022.stateofcss.com/en-US/)
- [stato js](https://2022.stateofjs.com/en-US/)
- [React Dev](https://react.dev)
- [digitalocean sito](https://digitalocean.com)

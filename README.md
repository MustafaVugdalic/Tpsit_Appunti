# Tpsit Appunti 11/10/2023

## Proxy

> Il proxy è un server intermediario o un software che funziona come gateway tra client e la destinazione di un server.

> Il proxy serve per:

- Forward Proxy
- Reverse Proxy
- Transparent Proxy
- Anonymous Proxy
- High-Anonymity Proxy
- Content Filtering Proxy:
- Caching Proxy:
- SSL/TLS Proxy:
- SOCKS Proxy:

## Promise

>Promises sono dei concetti fondamentali in JavaScript come in React, una popolare libreria per costruire interfaccie per utenti, anche per configurare operazioni asincrone.

> | Esempio di una Promise in JS |
```
const getUsers = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const users = [
            { name: "Black Mamba"},
            { name: "Davy Jones"},
            { name: "Dead Man"},
        ];

        resolve(users);   
    }, 1000);
};)
``` 

> La funzione resolve in una promessa viene utilizzata per indicare che l'operazione asincrona è stata completata con successo e per fornire il valore risultante.

> La funzione reject in una promessa viene utilizzata per indicare che l'operazione asincrona è fallita o ha generato un errore.

``` 
const pippo = (a) => 3+2;

const p = new Promise((a,b) =>{
    let c = a + b;
    return c;
})
``` 

### Link utili

> - [Dev](https://dev.to/codeofrelevancy/all-about-promises-in-javascript-39lj)
> - [Freecodecamp](https://www.freecodecamp.org/news/javascript-asynchronous-operations-in-the-browser/)
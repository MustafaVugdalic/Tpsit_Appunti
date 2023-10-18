let sonoqui ="HELLO"

const button = document.querySelector('#btn');

function callback(e){
    let sonoqui ="CALLBACK";
    console.log(sonoqui);
    console.log(e.target);
}

button.addEventListener('click', callback);

function greeting(){
    let sonoqui ="WORLD"
    console.log("Ciao Mondo!")
}

function run() {
    let sonoqui ="HELLO"
    greeting();
}

run();
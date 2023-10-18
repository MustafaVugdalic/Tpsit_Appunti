//const pippo = (a) => 3+2;

//const p = new Promise((a,b) =>{
//    let c = a + b;
//    return c;
//})



//const pippo2 = (a) => a+2;

//const p2 = new Promise(pippo2)

//console.log(pippo2(6))



const getUsers = new Promise((resolve, reject) => {
    const value = Math.random();
    setTimeout(() =>{
        const users = [
            { name: "Black Mamba"},
            { name: "Davy Jones"},
            { name: "Dead Man"},
        ];
        if(value > 0.5){
            reject('Something went wong');
        }
        resolve(users);   
    }, 1000);
});     

getUsers.then((users) => {
    console.log(users);
});
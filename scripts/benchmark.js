console.log("hello")

domandaEsempio = {
    domanda: "Di che colore è il cielo",
    risposte: ['viola', 'azzurro', 'rosso'],
    corretta: 1, /* indice dell'array risposte */
}


const timer = function(sec){
    let until = new Date().getTime() + sec*1000;

    let current = new Date()
    while(current.getTime() < until){
        current = new Date()
        let missing = until - current.getTime()
        console.log(missing/1000)
    }
}
timer(10);

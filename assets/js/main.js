// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

function prezzo() {
    let nome = document.getElementById("nome").value;
    let eta = document.getElementById("select").value;
    let km = document.getElementById('km').value;
    let biglietto = km * 0.21
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    if (eta < 18) {
        biglietto *= 0.8
        console.log(`Il prezzo del biglietto è di ${biglietto.toFixed(2)}`)
    }else if (eta >= 65) {
        biglietto *= 0.6
        console.log(`Il prezzo del biglietto è di ${biglietto.toFixed(2)}`)
    }else {
        biglietto = biglietto
        console.log(`Il prezzo del biglietto è di ${biglietto.toFixed(2)}`)
    }

    document.getElementById('prezzo').innerHTML = `
        <div class="card text-dark">
            <h1 class="mx-auto mt-3 text-success">Il tuo biglietto</h1>
            <div class="card-body d-flex justify-content-between">
                <div class="card-title">
                    <h2 class="text-danger">Nome passegero</h2>
                    <h4>${nome}</h4>
                </div>
                <div class="card-title">
                    <h2 class="text-danger">Carrozza</h2>
                    <h4>${Math.floor(Math.random()*9)+1}</h4>
                </div>
                <div class="card-title">
                    <h2 class="text-danger">Posto a sedere</h2>
                    <h4>${alphabet[Math.floor(Math.random() * alphabet.length)]}${Math.floor(Math.random()*(501 - 1) + 1)}</h4>
                </div>
                <div class="card-title">
                    <h2 class="text-danger">Costo</h2>
                    <h4>${biglietto.toFixed(2)}€</h4>
                </div>
            </div>
        </div>
    
        
    `
    
}

const apiUrl = 'https://blockchain.info/ticker'

const getPrice = () => {
    
    let req = new XMLHttpRequest() //creer une requete

    req.open('GET', apiUrl)
    
    req.responseType = 'json' //preciser le retour attendu
    req.send() // envoi de la requete

    //on execute une fonction dès qu'on reçoit la réponse
    req.onload = function(){
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200) {
                let response = req.response // stocke la réponse

                let dollarsPrice = response.USD.last
                let eurosPrice = response.EUR.last

                //afficher les données
                document.querySelector('#price_label').textContent = dollarsPrice
                document.querySelector('#price_label_eur').textContent = eurosPrice
            }
        }
        else{
            alert('un problème est survenu, merci de revenir plus tard')
        }
    }
    console.log("prix actualisé")
}

getPrice()

//mise à jour toutes les 20 sec
setInterval(getPrice, 20000)
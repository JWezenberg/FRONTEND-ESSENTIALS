      let persoon = {
    voornaam : prompt("Wat is je voornaam?"),
    achternaam : prompt("Wat is je achternaam?"),
    email : prompt("Wat is je e-mail?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    woonplaats : prompt("In welke stad woon je?")
};

console.log(persoon)

document.querySelector('h2').innerHTML              = persoon.voornaam + " " + persoon.achternaam
document.querySelector('td.voornaam').innerHTML     = persoon.voornaam
document.querySelector('td.achternaam').innerHTML   = persoon.achternaam
document.querySelector('td.email').innerHTML        = persoon.email
document.querySelector('td.leeftijd').innerHTML     = persoon.leeftijd
document.querySelector('td.woonplaats').innerHTML   = persoon.woonplaats

if (persoon.leeftijd == 16){
    document.querySelector('body').style.backgroundColor = 'orange'
}
else{
    if (persoon.leeftijd == 17){
        document.querySelector('body').style.backgroundColor = 'blue'
    }
    else{
        if (persoon.leeftijd == 18){
            document.querySelector('body').style.backgroundColor = 'gold'
        }
        else{
            if (persoon.leeftijd == 19){
                document.querySelector('body').style.backgroundColor = 'green'
            }
            else{
                document.querySelector('body').style.backgroundColor = 'pink'
            }
        }
    }
}
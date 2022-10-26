const coffeeContainer = document.querySelector('main')

function setLoading () {
    coffeeContainer.innerHTML = ''
    const h2 = document.createElement('h2')
    const loading = document.createTextNode('LOADING . . .')
    h2.appendChild(loading)
    coffeeContainer.appendChild(h2)
}

function displayCoffeeList(coffeeList) {
    coffeeContainer.innerHTML = ''
    coffeeList.map(coffee => {
        
    })
}

function getCoffee (){
fetch(`https://api.sampleapis.com/coffee/hot`)
.then(response => response.json())
.then(coffeeList => console.log(coffeeList))
.catch(console.error)
}

function displayCoffeeList (coffeeList) {

}


getCoffee()
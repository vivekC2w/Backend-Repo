//using async await 
async function getAnimalData() {
    const response = await fetch ('https://fakerapi.it/api/v1/persons');
    const finalData = await response.json();
    console.log(finalData);
    document.getElementById('container').innerHTML = JSON.stringify(finalData);
}

//using .then()
function getAnimalData2() {
    const response = fetch ('https://fakerapi.it/api/v1/persons')
    .then(function(response) {
        response.json()
        .then(function(finalData) {
            console.log(finalData);
        })
    })
}
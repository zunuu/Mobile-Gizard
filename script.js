const searchButton = document.getElementById('searchButton');
const searchMobile = () => {

    const input = document.getElementById('searchInput')
    let inputValue = input.value;
    let errorMessage = document.getElementById('error')
    errorMessage.innerText = ""
    // console.log(inputValue)
    if (inputValue == "") {

        let ErrorSection = document.createElement('div')

        ErrorSection.innerHTML = `<div class="p-5 text-center my-5"><h1>Please search with a name </h1></div>`
        errorMessage.appendChild(ErrorSection)

    }
    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
            .then(res => res.json())
            .then(data => displayMobile(data.data))
        input.value = "";
        // console.log(inputValue)

    }

}
const displayMobile = allPhones => {


}
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

    // for (const eachPhone of allPhones) {
    //     
    // }
    const allMobiles = document.getElementById('allMobiles')
    allPhones.forEach(eachPhone => {
        // console.log(eachPhone.brand)
        // console.log(eachPhone.phone_name)
        // console.log(eachPhone.image)
        console.log(eachPhone)
        const newMobile = document.createElement('div');

        newMobile.innerHTML = `
        
        <div class="border border-5 border-white mx-auto bg-transparent rounded-3 shadow-lg" style="width: 10rem;">
            <img src="${eachPhone.image}" class="card-img-top rounded-3 w-100" alt="...">
            
            <ul class="list-group bg-transparent rounded-3 list-group-flush">
                <li class="list-group-item rounded-3 bg-info bg-gradient bg-opacity-25 text-dark">${eachPhone.brand}</li>
                <li class="list-group-item rounded-3 bg-danger bg-gradient bg-opacity-25 text-dark"><strong>${eachPhone.phone_name}</strong></li>
                <li class="list-group-item bg-white p-0 pt-1 bg-gradient   bg-opacity-25 text-dark">
                    
                        <button type="button" class="px-4 rounded-pill btn btn-primary" data-bs-toggle="modal"  data-bs-target="#exampleModal">
                           
                              See Details
                           
                        </button>
                  
                </li>
            </ul>
           
        </div>
       
        `
        newMobile.classList.add("col-xl-4", "p-5", "my-5", "bg-transparent", "text-center")
        allMobiles.appendChild(newMobile);
    })



}
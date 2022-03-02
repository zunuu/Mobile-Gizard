let allMobiles = document.getElementById('allMobiles')
let sensorsSection = document.getElementById('sensorsSection')

const resetSensor = () => {
    sensorsSection.innerText = ""
}
let noResultMessage = document.getElementById('noResult')
const searchButton = document.getElementById('searchButton');
const searchMobile = () => {
    const input = document.getElementById('searchInput')
    let inputValue = input.value;
    let errorMessage = document.getElementById('error')




    allMobiles.innerHTML = ""
    errorMessage.innerText = ""


    // error checking
    if (inputValue == "") {
        noResultMessage.innerHTML = ""
        let ErrorSection = document.createElement('div')

        ErrorSection.innerHTML = `<div class="p-5 text-center my-5"><h1>Please search with a name </h1></div>`
        errorMessage.appendChild(ErrorSection)

    }
    // API calling 


    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
            .then(res => res.json())
            .then(data => displayMobile(data.data))

        // input.value =""; resets the input value in search box
        input.value = "";


        // console.log(displayMobile)




    }



}
const displayMobile = allPhones => {

    if (allPhones.length == 0) {
        noResultMessage.innerHTML = ""
        let NoResultSection = document.createElement('div')

        NoResultSection.innerHTML = `<div class=" p-5 text-center my-5 " ><h1>No Result Found </h1></div>`
        noResultMessage.appendChild(NoResultSection)


    }
    else {
        noResultMessage.innerHTML = ""



        // let allMobiles = document.getElementById('allMobiles')
        allPhones.slice(1, 21).forEach(eachPhone => {
            // console.log(eachPhone.brand)
            // console.log(eachPhone.phone_name)
            // console.log(eachPhone.image)
            // if (allPhones.innerText == "") {
            //     console.log("kalloooooooo")
            // }
            // console.log(eachPhone)

            let newMobile = document.createElement('div');

            newMobile.innerHTML = `
            
            <div class="border border-5 border-white mx-auto bg-transparent rounded-3 shadow-lg" style="width: 10rem;">
                <img src="${eachPhone.image}" class="card-img-top rounded-3 w-100" alt="...">
                
                <ul class="list-group bg-transparent rounded-3 list-group-flush">
                    <li class="list-group-item rounded-3 bg-info bg-gradient bg-opacity-25 text-dark">${eachPhone.brand}</li>
                    <li class="list-group-item rounded-3 bg-danger bg-gradient bg-opacity-25 text-dark"><strong>${eachPhone.phone_name}</strong></li>
                    
                    <li class="list-group-item bg-white p-0 pt-1 bg-gradient   bg-opacity-25 text-dark">
                        
                            <button type="button" class="px-4 rounded-pill btn btn-primary" data-bs-toggle="modal"  data-bs-target="#staticBackdrop" onclick="mobileDetailsButton('${eachPhone.slug}')">
                               
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

}
// for (const eachPhone of allPhones) {
//     
// }

const mobileDetailsButton = (slug) => {
    // console.log(slug)
    // const phoneName = document.getElementById('nameOfPhone')
    // phoneName.innerText= `${}`
    // const idEachMobiles =document.getElementById('')
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => MobileDetails(data.data))
}

const MobileDetails = details => {
    // console.log(details.brand)
    // console.log(details.image)
    // // console.log(details.name)


    // console.log(details.mainFeatures)


    const sensors = details.mainFeatures.sensors
    // const otherDetails = details.others
    // console.log(otherDetails)


    for (eachSensor of sensors) {
        const each = document.createElement('li')
        each.innerText = eachSensor
        // sensorsSection.innerText = each.innerText
        sensorsSection.appendChild(each)


    }


    // console.log(details.releaseDate)
    // console.log(details.slug)
    // console.log(details)
    // for (MobileFullDetails in details) {
    //     // console.log(MobileFullDetails)

    //     const eachMobileFullDetails = (details[MobileFullDetails])
    //     // console.log(eachMobileFullDetails)



    //     displayMobileDetails.innerText = eachMobileFullDetails
    //     const mobileDetailsInner = displayMobileDetails.innerText;
    //     // console.log(mobileDetailsInner)
    // }

    const displayMobileDetails = document.getElementById('displayDetails')

    displayMobileDetails.innerHTML = `
    <div class="d-flex align-items-center ">
            <img class="w-25 rounded-3 bg-success bg-gradient p-1 bg-opacity-25 " src="${details.image}"> 
            <p class="ps-3 bg-success p-3 bg-opacity-50 bg-gradient mx-1 rounded">

               <span class="fs-3">
                   <b>Model:
                   ${details.name} 
                   </b>
               </span>

                    <br>
               <small id="date">${details.releaseDate}</small>
                    <br>      
               <strong>Brand:
                   ${details.brand}
               </strong>

            </p> 
    </div>
  

    <div class="py-3 bg-warning my-3 p-3 bg-opacity-25 bg-gradient mx-1 rounded">
    <p>chipSet: ${details.mainFeatures.chipSet}</p>
    <p>memory: ${details.mainFeatures.memory}</p>
    <p>storage: ${details.mainFeatures.storage}</p>
    </div>


    <h5>Others Detail</h5>
    <hr>
    <div class="bg-info my-1 p-3 bg-opacity-50 bg-gradient mx-1 rounded">
    <p>Bluetooth: ${details.others.Bluetooth}</p>
    <p>GPS: ${details.others.GPS}</p>
    <p>Radio: ${details.others.NFC}</p>
    <p>Radio: ${details.others.Radio}</p>
    <p>USB: ${details.others.USB}</p>
    <p>WLAN: ${details.others.WLAN}</p>
    </div>
    `


    // condition for no release date of phones 
    const date = document.getElementById('date')
    if (date.innerText == "") {
        date.innerText = "No Release Date Found"

    }



}


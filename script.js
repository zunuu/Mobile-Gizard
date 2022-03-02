let allMobiles = document.getElementById('allMobiles')
let noResultMessage = document.getElementById('noResult')
const searchButton = document.getElementById('searchButton');
const searchMobile = () => {
    const input = document.getElementById('searchInput')
    let inputValue = input.value;
    let errorMessage = document.getElementById('error')
    allMobiles.innerHTML = ""
    errorMessage.innerText = ""
    // noResultMessage.innerText = ""
    // NoResultSection.innerText = ""

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
    // NoResultSection.innerHTML = ""
    // noResultMessage.innerText = ""
    // NoResultSection.innerText = ""
    // console.log(allPhones)

    // let noResultMessage = document.getElementById('noResult')

    if (allPhones.length == 0) {
        noResultMessage.innerHTML = ""
        let NoResultSection = document.createElement('div')

        NoResultSection.innerHTML = `<div class=" p-5 text-center my-5 " ><h1>No Result Found </h1></div>`
        noResultMessage.appendChild(NoResultSection)


    }
    else {
        noResultMessage.innerHTML = ""



        // let allMobiles = document.getElementById('allMobiles')
        allPhones.forEach(eachPhone => {
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
        sensorsSection = document.getElementById('sensorsSection')
        // sensorsSection.innerText = each.innerText
        sensorsSection.appendChild(each)
    }
    // for (eachDetail in otherDetails) {
    //     const each = document.createElement('li')
    //     eachDetail.innerText = eachDetail
    //     otherDetailSection = document.getElementById('otherDetailSection')
    //     // sensorsSection.innerText = each.innerText
    //     otherDetailSection.appendChild(each)
    //     // console.log(each)


    // }
    // const otherInfos = Object.entries(otherDetails)
    // // console.log(otherInfos)
    // for (eachInfoDetail of otherInfos) {
    //     // console.log(eachInfoDetail)
    //     for (eachInfo of eachInfoDetail) {
    //         console.log(eachInfo)
    //     }


    // }



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
    <div class="d-flex">
            <img class="w-25 p-2" src="${details.image}"> 
            <p class="ps-3">

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
  

    <div class="py-3">
    <p>chipSet: ${details.mainFeatures.chipSet}</p>
    <p>memory: ${details.mainFeatures.memory}</p>
    <p>storage: ${details.mainFeatures.storage}</p>
    </div>


    <h5>Others Detail</h5>
    <hr>
    <p>Bluetooth: ${details.others.Bluetooth}</p>
    <p>GPS: ${details.others.GPS}</p>
    <p>Radio: ${details.others.NFC}</p>
    <p>Radio: ${details.others.Radio}</p>
    <p>USB: ${details.others.USB}</p>
    <p>WLAN: ${details.others.WLAN}</p>
    
    `
    // condition for no release date of phones 
    const date = document.getElementById('date')
    if (date.innerText == "") {
        date.innerText = "No Release Date Found"

    }
    // GPS: "Yes, with A-GPS, GLONASS, GALILEO, BDS"
    // NFC: "Yes"
    // Radio: "No"
    // USB: "USB Type-C 2.0, USB On-The-Go"
    // WLAN: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot"

    // console.log(details.releaseDate)
}

// x = { a: 56, b: 555, c: 666 }
// for (xs in x) {

//     console.log(x[xs])

// }
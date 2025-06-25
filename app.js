let apiKey = "__API_KEY__";

function loadWeatherData(searchVal) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchVal}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("root").innerHTML = `
                    <section>
                            <a href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="${data.current.condition.icon}" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.location.country}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.current.condition.text}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.current.temp_c}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${data.location.name}</p>
        </div>
    </a>
                    </section>
            `
            console.log(data);

        })
}


function searchByCity() {
    let searchVal = document.getElementById("txtSearchInput").value;
    loadWeatherData(searchVal);
    console.log(searchVal);
}


function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}


function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    loadWeatherData(position.coords.latitude + "," + position.coords.longitude);
}

getGeoLocation();



// let showPosition = function (position){
//     console.log(position);
// }

// let showPosition =  (position) => {
//     console.log(position);
// }


// let showPosition =  position => console.log(position);



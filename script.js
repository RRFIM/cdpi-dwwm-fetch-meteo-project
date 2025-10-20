function main() {
    Onstill()
    isRaining()
    const Input_elem = document.body.querySelector(".LocationInput")
    Input_elem.addEventListener("change", function(){
        const input_value = Input_elem.value
        GeoLocation(input_value)
    })
}
main();



function Onstill()
{
    const Lati_elem = document.body.querySelector(".Lati")
    const Long_elem = document.body.querySelector(".Long")

    const MainPosition = navigator.geolocation.getCurrentPosition(

        (PositionCurent_obj) => {
            const MainLatitude = PositionCurent_obj.coords.latitude
            const MainLong = PositionCurent_obj.coords.longitude
    
            Temperature(MainLatitude,MainLong)
        }
    )
}

async function GeoLocation(city)
{
    const City_elem = document.body.querySelector(".LocationName")
    const City_obj = await fetch("https://geocoding-api.open-meteo.com/v1/search?name="+(city)+"&count=10&language=en&format=json").then(res => res.json())
    console.log(City_obj.results[0].name)
    console.log(City_obj.results[0])
    const City_name = City_obj

}

function btn(Location)
{
    const Icon_elem = document.body.querySelector(".LocationSearchIcon")
    Icon_elem.addEventListener("click", function(){
        
    })
}

async function Temperature(lat,long) 
{
    const Temp_elem = document.body.querySelector(".LocationTemp")
    const meteo_obj = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+(lat)+"&longitude="+(long)+"&current=temperature_2m").then(res => res.json())
    const MainTemperature = meteo_obj.current.temperature_2m
    Temp_elem.textContent = MainTemperature
}

async function isRaining()
{
    let Icon_elem = document.body.querySelector(".LocationWeatherIcon")
    const Rain_obj = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code").then(res => res.json())
    const MainRain = Rain_obj.current.weather_code
    if (MainRain >= 61 || 63 || 65) 
    {
        Icon_elem.classList.toggle("fa-cloud-rain")
    }
    else
    {
        return exit
    }
}
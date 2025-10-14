function main() {
    Onstill()
    
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


async function Temperature(lat,long) 
{
    const meteo_obj = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+(lat)+"&longitude="+(long)+"&current=temperature_2m").then(res => res.json())
    const MainTemperature = meteo_obj.current.temperature_2m
}


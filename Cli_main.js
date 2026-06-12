const ps = require("prompt-sync")
const input = ps()
const api_key = "Mykey"

async function get_weather(name) {
    try{
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + api_key + "&q="+name)
        if (response.ok) {
            let data = await response.json()
            console.log("The Weather in: " + data.location.name + "\n" + "name: " + data.location.name + ' / ' + data.location.country + "\n"
                + "local time: " + data.location.localtime + "\n" + "Temp_c: " + data.current.temp_c + "\n"
                + "Temp_f: " + data.current.temp_f + "\n" + "Weather: " + data.current.condition.text + "\n"
            )
        } else {
            console.log("Error " + response.status)
        }
    }catch (error){
        console.log("Something went wrong :"+ error.name)
    }
}
async function main(){
    let location = input("Enter the city to see the weather: ")
    await get_weather(location)
}
main()
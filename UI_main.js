const api_key = "8c86b2138c00447ead4102606261004"

async function get_weather(name) {
    try{
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=" + api_key + "&q="+name)
        if (response.ok) {
            let data = await response.json()
            return data
        } else {
            return null
        }
    }catch (error){
        console.log("Something went wrong :"+ error.name)
    }
}
async function main(){
    const input =document.getElementById("city")
    const fetcher = document.getElementById("get")
    const output = document.getElementById("data")
    fetcher.addEventListener("click",async ()=>{
        let result =await get_weather(input.value)
        if(result !== null) {
            output.innerHTML = ` 
<h3>📍Weather in  ${input.value}</h3>
<hr>
<p>🧾name: ${result.location.name} - ${result.location.country}</p>    
<p>🕑Local Time: ${result.location.localtime}</p>
<p>🌡️Temp in Celsius: ${result.current.temp_c}°C</p>
<p>🌡️Temp in Fahrenheit: ${result.current.temp_f}°F</p>
<p>⛅ The Weather: ${result.current.condition.text}</p>
`
}else{
            output.innerHTML = `City not found ❌`
        }
    })
}
main()
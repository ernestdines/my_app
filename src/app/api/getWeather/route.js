export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the weather api page")

  

  
    const res2 = await fetch('http://api.weatherapi.com/v1/current.json?key=e6f82ba1c691454c851114711241705&q=Dublin&aqi=no')
    const data = await res2.json()

    console.log(data.current.temp_c)


    let currentTemp = data.current.temp_c
    let condition = data.current.condition.text
  
    // at the end of the process we need to send something back.
    return Response.json({"temp": currentTemp, "condition": condition})


   
  }
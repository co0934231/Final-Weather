//Christian Oliver
//05/18/2021
const app = new Vue({
    el: "#app",
    data: {
      //Message at top of page
        message: "Welcome to Your Area Weather!",
        // Temp for city
        author: "",
        // City Name
        quote:" ",
        // Current Weather
        current:"",
        //Icon Picture
        icon:"",
        // parameters used for api
        apiparameters:"",
        // measurements of degree
        units:"Imperial",
        //zip used in api
        zip:"",
        //for user knowledge of how to change unit of degree from faherenheit to celsius
        tempList:"Change unit (Faherenheit = Imperial) or (Celsius = Metric)",

    // Quote arrays used
    quotes:[
        // {quoteAuthor: "Steve Jobs", quoteText:"Stay hungry, stay foolish"},
        // {quoteAuthor: "Elon Musk", quoteText:"I would like to die on Mars just not on impact"},
        // {quoteAuthor: "Bill Gates", quoteText:"Get used to it"}

    ]
    

    },
    methods:{
        changeQuote(obj){
            // alert("I got clicked");
            console.log(obj);
            // Change the author of quote top of screen
            this.author = obj.quoteAuthor;
            // Change the quote at the top of screen
            this.quote = obj.quoteText;
        },
        useApi(){
            // alert("hiiiii")
          //axios api
            axios.get("https://api.openweathermap.org/data/2.5/weather?zip=" + this.apiparameters + ",us&units=" + this.units + "&appid=c705d42a1a4cbe1ec0b1880cd421189f")
            .then(function(e){
              //console log for testing
                 console.log(e.data.main.temp );

                //calling vue data for index
                app.author = e.data.main.temp;
                app.quote = e.data.name;
                app.current = e.data.weather[0].description;
                app.icon = "http://openweathermap.org/img/wn/" + e.data.weather[0].icon + "@2x.png";
                





            // regex zip code validation
            function isUSAZipCode(str) 
            {
              return /^{5}/.test(str);
            }
            
            function validateInput() 
            {
              console.log("validateInput");
              let zipCode = document.getElementById("zipCode").value;
              let message = alert("");
              if (isUSAZipCode(zipCode)) 
              {
                message = "Enter a 5 Digit Zip Code";
              } else {
                message = "Invalid Zip Code";
              }
              document.getElementById("msg").innerHTML = message;
            }
            
             })
             

        }
    }

})
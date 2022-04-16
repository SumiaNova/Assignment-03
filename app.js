var text = '';
function getData(){
  text = document.getElementById('country').value;
  connectApi(text)
}

function connectApi (text){
fetch(`https://api.covid19api.com/summary${text}`)
 .then(res=>res.json() )
 .then(data=>loadDATA(data))
  }
connectApi();

function loadDATA(data){
  console.table(data.countries[0]);
  var container = document.getElementById("countries-container");
  
  var country = data.countries[0].Country;
    var confirmed = data.countries[0].TotalConfirmed;
    var recovered = data.countries[0].TotalRecovered;
    var deaths = data.countries[0].TotalDeaths;
  
  container.innerHTML= `<p> <b>Name: $ {country}</b></p>
                         <p> <b>Confirmed cases: $ {confirmed}</b></p>
                        <p> <b>Recovered cases: $ {recovered}</b></p>
                        <p> <b>Death cases:$ {deaths}</b></p>
                        <button class='btn-style' onclick="details()">more details </button> `;
                      
    container.appendChild(newDiv);                     
  }

  var text = '';
function details (){
    text = document.getElementById('country').value;
    connectData(text)
}
function connectData(text){
  fetch(`https://restcountries.com/v3.1/all=${text}`)
  .then(res=>res.json())
  .then(data=>loadAPI(data));
}
connectData();

function loadAPI(data){
  console.log(data[0]);
  var outerDiv = document.getElementById("countries-container")
  for (var a=0; a<data.length; a++){

   var newDiv = document.createElement('div');
   newDiv.innerHTML = `<img src='${data[a].flags.png}' >
                       <p>Population:<b> ${data[a].population}</b></p>
                       <p>Capital: ${data[a].capital[0]}</p>
                        `;

   newDiv.classList.add('inner-style');
   outerDiv.appendChild(newDiv);
  }
}
  
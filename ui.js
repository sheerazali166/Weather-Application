class UI{

 constructor(){

  this.location = document.getElementById("w-location");
  this.desc = document.getElementById("w-desc");
  this.string = document.getElementById("w-string");
  this.detail = document.getElementById("w-detail");
  this.icon = document.getElementById("w-icon");
  this.humidity = document.getElementById("w-humidity");
  this.feelslike = document.getElementById("w-feels-like");
  this.dewpoint = document.getElementById("w-dewpoint");
  this.wind = document.getElementById("w-wind");


 }

 
paint(weather){



this.location.textContent = weather.display_location.full;
this.desc.textContent = weather.weather;
this.string.textContent = weather.temperature_string;
this.icon.setAttribute('src',weather.icon_url);
this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`; 
this.feelslike.textContent = `Feels Like: ${weather.feelslike_string}`;
this.wind.textContent = `wind: ${weather.wind_string}`;         


} 



}
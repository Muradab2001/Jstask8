let key='5275ffa810442144c987549c6e009785'
let url='https://api.openweathermap.org/data/2.5/'
let input=document.getElementById('input');


input.addEventListener('keypress',function(x){
if (x.keyCode===13) {
    getvalue(input.value);
}
getvalue = (cityname)=>{
  let city=`${url}weather?q=${cityname}&appid=${key}&units=metric&lang=az`
  fetch(city)
  .then(response=>response.json())
  .then(Resultvalue)
}
})

Resultvalue=(value)=>{
   let city =document.getElementById('country');
   city.innerHTML=`
   ${value.name},${value.sys.country} `
   let temp=document.getElementById('temp')
   temp.innerHTML=`
   ${value.main.temp.toFixed(0)}°C`
 
  let tempcount= temp.innerText.slice(0,2);
 if (tempcount>25) {
    temp.style.color='red'
  }
  else if (tempcount>15) {
    temp.style.color='#e84949'
  }
 
  else if (tempcount>10) {
    temp.style.color='yellow'
    
  }
  else if (tempcount<10) {
    temp.style.color='blue'
    
  }
   let mod=document.getElementById('mod');
   mod.innerHTML=value.weather[0].description;
   let weather=value.weather[0].description;
   let minmax=document.getElementById('tempminmax');
   minmax.innerHTML=`${value.main.temp_min.toFixed(0)}°C/${value.main.temp_max.toFixed(0)}°C`
   backgroundvalue(weather)
}
backgroundvalue=(value)=>{
    let main=document.getElementById('maindiv');
    let mod =document.getElementById('mod');
if (value=='aydın səma') {
    let background=main.setAttribute('style','background-image: url(http://cdn.cnn.com/cnnnext/dam/assets/191010144525-02-esb-reno-1010.jpg);');
    mod.style.color='yellow'
}
else if (value=='yüngül yağış') {
    let background=main.setAttribute('style','background-image: url(https://c.wallhere.com/photos/37/dd/night_city_rain_skyscraper_aerial_view_sky_clouds_New_York_City-1928043.jpg!d);');
    mod.style.color='blue'
}

else if(value=='az buludlu') {
    let background=main.setAttribute('style','background-image: url(https://s7d2.scene7.com/is/image/TWCNews/apcloudyskyline_jpg);');
    mod.style.color='white'
}
else if (value=='qapalı buludlu') {
    let background=main.setAttribute('style','background-image: url(https://s7d2.scene7.com/is/image/TWCNews/apcloudyskyline_jpg);');
    mod.style.color='#333'
}
else if (value=='dağınıq buludlu') {
    let background=main.setAttribute('style','background-image: url(https://s7d2.scene7.com/is/image/TWCNews/apcloudyskyline_jpg);');
    mod.style.color='#97d6dd'
}
}

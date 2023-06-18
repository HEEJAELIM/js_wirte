const API_KEY = "f8d2f0511c3e602e4be5f13439441c79";

function ok(positiona) {
    const lat = positiona.coords.latitude;    
    const lon = positiona.coords.longitude;    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5682&lon=126.9977&appid=f8d2f0511c3e602e4be5f13439441c79`;
   
}
function no() {
    alert("실패");
}

navigator.geolocation.getCurrentPosition(ok, no);




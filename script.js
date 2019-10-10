var car_name;
var production_year;
var url;
var car_price;
var car_image;
var car_title;
var div_car;
var price;
var price_element;
var car_year;
var div_details;
var btn;
var div_empty
 
function createGallery(){
    for(var i = 0;i<cars.length;i++){
        
        car_name=cars[i].car_name;
        
        url = cars[i].image;
       
        div_car = document.createElement("div");
        car_image = document.createElement("img");
        car_title = document.createElement("p");
        div_details = document.createElement("div");
        div_car.setAttribute("id","div_car"+(i+1));
        car_image.setAttribute("id","car_image"+(i+1));
        
        div_details.setAttribute("id","div_details"+(i+1));
        car_image.setAttribute("src",url);
        car_image.onclick= function(e){
            createDetails(this.id);
        }
        car_title.innerHTML = car_name;
        
        document.getElementById("main").appendChild(div_car);
        document.getElementById("div_car"+(i+1)).appendChild(car_image);
        document.getElementById("div_car"+(i+1)).appendChild(car_title);
        document.getElementById("div_car"+(i+1)).appendChild(div_details);
        
    }
}
function createDetails(x){
    
    
    var id_number= Number(x.slice(9));
    
    car_image = document.createElement("img");
    car_title = document.createElement("p");
    car_year = document.createElement("p");
    btn = document.createElement("button");
    btn.setAttribute("id","btn"+id_number);
    car_image.setAttribute("id","image"+id_number);
    car_year.setAttribute("id","year"+id_number);
    car_title.setAttribute("id","title"+id_number);
    btn.innerHTML="x";
    btn.onclick= function(e){
        destroyDetails(this.id);
    }
    price_element = document.createElement("p");
    price_element.setAttribute("id","price"+id_number);
    car_year.innerHTML = cars[id_number-1].production_year;
    car_title.innerHTML = cars[id_number-1].car_name;
    price_element.innerHTML =cars[id_number-1].car_price;
    car_image.setAttribute("src",cars[id_number-1].image);
        
    document.getElementById("div_details"+(id_number)).appendChild(car_image);
    document.getElementById("div_details"+(id_number)).appendChild(car_title);
    document.getElementById("div_details"+(id_number)).appendChild(car_year);
    document.getElementById("div_details"+(id_number)).appendChild(price_element);
    document.getElementById("div_details"+(id_number)).appendChild(btn);
}
function destroyDetails(x){
    var id_number2= Number(x.slice(3));
    console.log(x.slice(12));
    var image = document.getElementById("image"+id_number2);
    var title = document.getElementById("title"+id_number2);
    var year = document.getElementById("year"+id_number2);
    var price = document.getElementById("price"+id_number2);
    var btn = document.getElementById("btn"+id_number2);
  
    image.remove();
    title.remove();
    year.remove();
    price.remove();
    btn.remove();
}
createGallery();
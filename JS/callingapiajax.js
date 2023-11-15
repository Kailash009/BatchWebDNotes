// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
function ShowAllProduct() {
    var api_Url="https://dummyjson.com/products";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML=this.responseText;
      }
    };
    xmlHttp.open("GET",api_Url,true); 
    xmlHttp.send();
  }



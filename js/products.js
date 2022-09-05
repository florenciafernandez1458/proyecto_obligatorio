let autosArray = [];

function showAutos(array){
   let contenidoHtml = "";
   
   for (let i = 0; i < array.length; i++){
    let auto = array.products[i];
           contenidoHtml += `
           <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name +`</h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.productCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
      document.getElementById("autos").innerHTML = contenidoHtml;
   }
}

document.addEventListener("DOMContentLoaded" , function(e){

    getJSONData(CATEGORIE_101_AUTO).then(function(result){ 
        if(result.status === "ok")
        {
         autosArray = result.data;
         showAutos(autosArray);
        }
    });

});
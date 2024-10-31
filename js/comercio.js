fetch(`https://fakestoreapi.com/products`)
                .then(res=>res.json())
                .then(json=>{
                    
                        json.map(function(elemento,i,elem){
                            elem = document.getElementById("cuerpo").innerHTML += 
                                `<div class="producto">
                                    <img src="${json[i].image}" id="imagen" class="imagen">
                                    <br>
                                    <br>
                                    <h1 class="titulo" id="titulo">${json[i].title}</h1>
                                    <h3 class="codigo" id="codigo">${json[i].id}</h3>
                                    
                                    <div class="info">
                                        <b class="precio"><i class="bi bi-currency-dollar"></i><b id="precio">${json[i].price}</b></b> 
                                        <b class="precio"><b id="categoria">${json[i].category}</b></b> 
                                    </div>
                                    <br>
                                    <center>
                                    <button class="btn btn-outline-success" id="btnComprar" onclick="comprar(${i});""><i class="bi bi-bag-fill"></i> Comprar</button>
                                    </center>
                                    
                                </div>`;
                            
                            return elemento
                        })
    
                        
                    });
function limitar(){

    let a = document.getElementById('valor').value;
    document.getElementById("cuerpo").innerHTML = '';
    fetch(`https://fakestoreapi.com/products?limit=${a}`)
                .then(res=>res.json())
                .then(json=>{
                    
                        json.map(function(elemento,i,elem){
                            elem = document.getElementById("cuerpo").innerHTML += 
                                `<div class="producto">
                                    <img src="${json[i].image}" id="imagen" class="imagen">
                                    <br>
                                    <br>
                                    <h1 class="titulo" id="titulo">${json[i].title}</h1>
                                    <h3 class="codigo" id="codigo">${json[i].id}</h3>
                                    
                                    <div class="info">
                                        <b class="precio"><i class="bi bi-currency-dollar"></i><b id="precio">${json[i].price}</b></b> 
                                        <b class="precio"><b id="categoria">${json[i].category}</b></b> 
                                    </div>
                                    <br>
                                    <center>
                                    <button class="btn btn-outline-success" id="btnComprar" onclick="comprar(${i});"><i class="bi bi-bag-fill"></i> Comprar</button>
                                    </center>
                                    
                                </div>`;
                            
                            return elemento
                        })
    
                        
                    });
}
                let nUsu = localStorage.getItem("usuario")
                
                fetch(`https://fakestoreapi.com/users/${nUsu}`)
                                    .then(res=>res.json())
                                    .then(json=>{
                                            console.log(json)
                                            document.getElementById('bienvenida').value = `Bienvenido/a ${json.name["firstname"]} ${json.name["lastname"]}`
                                        })

            function comprar(i){
                localStorage.setItem("productoSeleccionado", (i+1))
                window.location.href = "../html/mostrarProducto.html";
            }



/* este es el parte de los productos*/ 

class Product{
    constructor(name, price, year ){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

/*este es el parte de interface */

class UI {
    agregarProducto(product){
       const productList = document.getElementById('product-list');
       const element = document.createElement('div');
       element.innerHTML = `
              <div class = "card text-center mb-4">
                    <div class = " card-body">
                        <strong>Nombre del Producto</strong>: ${product.name}
                        <strong>Precio del Producto</strong>: ${product.price}
                        <strong>Año</strong>: ${product.year}
                        <a href="#" class="btn btn-primary" name="borrar"> Borrar</a>
                    </div>
             </div>
       `;

       productList.appendChild(element)
       

    }
     


    /**esto es para resetear el formulario cuando esto ya funcionó */

    resetearFormulario(){
        document.getElementById('product-form').reset();
    }

    borrarProducto(element){
        if (element.name === 'borrar') {
            element.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Producto Eliminado Satisfactoriamente', 'info');
        }
    }

    mostrarMensaje(message, cssClass){
       const div= document.createElement('div');
       div.className = `alert alert-${cssClass} mt-4`;
       div.appendChild(document.createTextNode(message));

       const container = document.querySelector('.container');
       /*esta linea de arrina es para mostrar en la pantalla */


      const app= document.querySelector('#app');
      container.insertBefore(div, app);

      // esto es para desaparecer los botones de agregado

      setTimeout(function() {
        document.querySelector('.alert').remove();
      },3000);

    }
}


/*esta es  la parte de los eventos */

 document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price= document.getElementById('price').value;
        const year = document.getElementById('year').value;

       

      const product = new Product(name, price, year);


      const ui = new UI ();

        if (name === '' || price === '', price <=0 || year === '') {
            return  ui.mostrarMensaje(' Ingresa los datos validos o no dejes espacios en Blanco', 'danger');
            
        }

        ui.agregarProducto(product);
        ui.resetearFormulario();
        ui.mostrarMensaje('Producto agregado satisfactoriamente', 'success');
      

        e.preventDefault();
 });



 document.getElementById('product-list').addEventListener('click', function(e){
       const ui =  new UI();
       ui.borrarProducto(e.target);
    
    })
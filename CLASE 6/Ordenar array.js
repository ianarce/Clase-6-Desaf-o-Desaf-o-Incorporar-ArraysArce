//FUNCION QUE ORDENA UN ARRAY DE OBJETOS POR SU PRECIO DE MENOR A MAYOR
function Ordernar(a,b){
    if (a.precio<b.precio){
        return -1}   
    else if(a.precio>b.precio){
        return 1
    }
    else{
        return 0
    }
}
class Producto{
    constructor(nombre,precio){
        this.nombre=nombre
        this.precio=precio
    }
}

const productos=[]
productos.push(new Producto("Tv LG 32 pulgadas",1500))
productos.push(new Producto("Monitor 32 pulgadas",600))
productos.push(new Producto("Laptop",1000))
productos.push(new Producto("Nokia",700))



productos.sort(Ordernar)
alert("PRODUCTOS ORDENADOS DE MENOR A MAYOR PRECIO")
for(producto of productos){
    alert("Nombre del producto: " + producto.nombre+ " Precio: " + producto.precio)
}

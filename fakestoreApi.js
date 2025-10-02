export async function obtenerProductos () {
    try{   
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        })

        const data = await response.json()
        console.log(`Productos: `)
        data.map( (producto) => {
          console.log(producto)
        })

    }catch(error){
        console.log(error)
    }
}
//obtenerProductos()
export async function obtenerProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
            method: "GET"
        })

        const data = await response.json()
        console.log(`Producto: `, data)
    }catch(error){
        console.log(error)
    }
}
//obtenerProducto("products/2)

export async function agregarProducto(producto) {
    try{
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })

        const data = await response.json()
        console.log("Producto agregado exitosamente ", data)
    }catch(error){
        console.log(error)
    }
}
/*
agregarProducto({
//"id": 17,
"title": "Nirvana T-shirt",
"price": 25000,
"description": "For men"
//"category": "test",
//"image": "https://www.pexels.com/photo/person-wearing-white-and-red-nirvana-top-1933589/"
})
*/

export async function eliminarProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
            method: "DELETE"
        })
        const data = await response.json()
        console.log("Producto eliminado exitosamente", data)
    }catch(error){
        console.log(error)
    }
}

//eliminarProducto(1)

export async function actualizarProducto(producto) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${producto.id}`,{
            method: "PUT",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()
        console.log("Producto actualizado", data)
    }catch(error){
        console.log(error)
    }

}



/*actualizarProducto({
"id": 14,
"title": "Dog T-shirt",
"price": 25000,
"description": "For women",
"category": "test",
"image": "https://www.pexels.com/photo/camera-on-chair-2062324/"
})*/







async function pedirDatos() {
    let urlBase = 'http://localhost:3000'
    let id = 1
    // obtener todos los datos
    const data = await fetch(`${urlBase}/product`);
    // obtener por parametros
    // const data1 = await fetch(`${urlBase}/product?color=${inputValue}`);
    // obtener por id
    const data2 = await fetch(`${urlBase}/product/${id}`);
    let json = await data2.json()
    console.log(json);
}

pedirDatos()
let urlBase = "http://localhost:3000";
async function pedirDatos() {
  let id = 1;
  // obtener todos los datos
  const data = await fetch(`${urlBase}/product`);
  // obtener por parametros
  // const data1 = await fetch(`${urlBase}/product?color=${inputValue}`);
  // obtener por id
  // const data2 = await fetch(`${urlBase}/product/${id}`);
  let json = await data.json();
  console.log(json);
}

async function postData() {
  const body = {
    newProduct: {
      title: "Iphone 13",
      price: "20",
      description: "8K 3D",
      stock: 25,
      img: ".jpg",
    },
    category: "Celulares",
  };
  let data = await fetch(`${urlBase}/product/`,{
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json",
    }
  })
  let obj = await data.json();
  console.log(obj);
}

postData()
pedirDatos();

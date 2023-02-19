const fs = require("fs"),
  path = require("path"),
  bikesDataPath = path.join(__dirname, "../data/bikes.json");

let bikes = JSON.parse(fs.readFileSync(bikesDataPath, "utf-8"));

const curd = {
  formProduct: (_, res) => {
    res.render("create");
  },
  createProduct: (req, res) => {
    console.log(req.file);

    let newBody = {
      imagen1: req.files[0].originalname,
      imagen2: req.files[1].originalname,
      id: 100,
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      modelo: req.body.modelo,
      referencia: req.body.referencia,
      valor: req.body.valor,
      descuento: req.body.descuento,
      talla: req.body.talla,
      descripcion: req.body.descripcion,
      especificaciones: [
        {
          nombre: req.body.esp_nombre,
          descripcion: req.body.esp_descripcion,
        },
        {
          nombre: req.body.esp_nombre2,
          descripcion: req.body.esp_descripcion2,
        },
        {
          nombre: req.body.esp_nombre2,
          descripcion: req.body.esp_descripcion2,
        },
      ],
    };

    bikes.push(newBody);
    console.log("Bicicleta a crear : ", newBody, "\n");

    try {
      fs.writeFileSync(bikesDataPath, JSON.stringify(bikes));
      console.log("Todo Ok");
      res.render("products", {
        bikes,
      });
    } catch (error) {
      console.log("error : " + error);
      res.render("create");
    }
  },
  formUpdateProduct: (req, res) => {
    let bike = bikes.filter((bike) => bike.referencia == req.params.id);
    res.render("put", { bike });
  },
  updateProduct: (req, res) => {
    let bike = bikes.filter(bike => bike.referencia == req.params.id)
    try {
        let newBody = {
            imagen1: req.files[0].originalname,
            imagen2: req.files[1].originalname,
            id: 100,
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            modelo: req.body.modelo,
            referencia: req.body.referencia,
            valor: req.body.valor,
            descuento: req.body.descuento,
            talla: req.body.talla,
            descripcion: req.body.descripcion,
            especificaciones: [
              {
                nombre: req.body.esp_nombre,
                descripcion: req.body.esp_descripcion,
              },
              {
                nombre: req.body.esp_nombre2,
                descripcion: req.body.esp_descripcion2,
              },
              {
                nombre: req.body.esp_nombre2,
                descripcion: req.body.esp_descripcion2,
              },
            ],
          };   
           
            
            bike[0].nombre = req.body.nombre,
            bike[0].tipo = req.body.tipo,
            bike[0].modelo = req.body.modelo,
            bike[0].referencia = req.body.referencia,
            bike[0].valor = req.body.valor,
            bike[0].descuento = req.body.descuento,
            bike[0].talla = req.body.talla,
            bike[0].descripcion = req.body.descripcion,
         
            
            bike[0].descripcion[0].nombre = req.body.esp_nombre,
            bike[0].descripcion[0].descripcion = req.body.esp_descripcion,
              
            bike[0].descripcion[1].nombre = req.body.esp_nombre2,
            bike[0].descripcion[1].descripcion = req.body.esp_descripcion2,
              
            bike[0].descripcion[2].nombre = req.body.esp_nombre2,
            bike[0].descripcion[2].descripcion = req.body.esp_descripcion2
              
            
        
    } catch (error) {
        
    }
    

    bikes.push(newBody);
    console.log("Bicicleta a actualizar : ", newBody, "\n");

   
  },
};

module.exports = curd;

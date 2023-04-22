# <h1 align="center" > Curso Programación Web Full Stack Grupo #10 </h1>

****

## Contenido


- [Título](#programación-web-full-stack)

- [Integrantes](#integrantes)

- [Tecnologias](#tecnologias-utilizadas)

- [Descripción](#descripción)

- [Wireframes](#wireframes)

- [Funcionalidades](#hammer-funcionalidades-del-proyecto)

- [Compilación](#compilar-e-iniciar-el-proyecto)


## Integrantes

Andres Verjhamn - Software Developer



```
- Estoy muy interesado en el desarrollo web usando react.js
```

Genesis Mavare - Application development associate


```
- Actualmente trabajo como analista funcional sap
- Comence este curso porque quiero dedicarme al desarrollo web
```

Andres Damian Reto - Abogado

```
- Soy un entusiasta del desarrollo web.
- Mi interés en el desarrollo web comenzó como un hobby y este curso lo inicie con el objetivo de ampliar mis conocimientos.
```

Oscar Geovany Rico - Software Developer

```
- Apasionado por el deporte
- Tome este curso para aprender tecnologias y herramientas para el desarrollo web.
```


## Tecnologias Utilizadas


 - `HTML5` <i class="fa-brands fa-html5"></i>
 - `CSS` <i class="fa-brands fa-css3"></i>
 - `JavaScript` <i class="fa-brands fa-square-js"></i>
 - `NodeJS` <i class="fa-brands fa-node"></i>
 - `React` <i class="fa-brands fa-react"></i>

 ## Descripción
 
> La temática de nuestra Market Place se enfoca en la venta de productos a los apasionados del ciclismo.
Personas que toman este deporte como una forma de vida. Ofreciendoles una amplia gama de artículos, como bicicletas, indumentaria, repuestos, accesorios y suplementos de las mejores marcas del mercado nacional e internacional.
>
> Tomamos como refenrentes y ejemplos los siguientes comercios:
> 1. https://suarezclothing.com/
> 2. https://www.specialized.com/co/en
> 3. https://zonabike.mitiendanube.com/
> 4. https://komsportswear.com/
> 5. https://www.goldenbike.com.ar/



:construction: Proyecto en construcción :construction:

## Base de datos

![image](https://user-images.githubusercontent.com/55674843/230798183-9fcb5d3c-192d-4b8c-99ba-5756f2233b39.png)

### Script para crear las tablas de la base de datos

[CreateTables.txt](https://github.com/ogrico/grupo_10_ibike/files/11297483/CreateTables.txt)

### Script para registras productos y datos basicos del sistema

[Registros.txt](https://github.com/ogrico/grupo_10_ibike/files/11297679/Registros.txt)

```
## Usuarios para entrar al sistema 

- Usuario Editor editor@correo.com pass: 123456
- Usuario Customer pepito@correo.com pass : 123456

```

## Wireframes


- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Home</a>
- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Detalle de prodcuto</a>
- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Carrito de compras</a>
- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Formulario de registro</a>
- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Formulario de login</a>
- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Formulario de compra con registro</a>
- <a href="https://drive.google.com/drive/folders/1TGU1ea-md7RgblYSQ603x-BeZuRYHEFV?usp=sharing" target="_blank">Formulario de compra sin registro</a>


## :hammer: Funcionalidades del proyecto


- `Login`: El sistema permite iniciar sesion y cerrar sesion 
- `Listado de prodcutos`: El sistema permite mostrar el listado de productos de acuerdo a sus categorias
- `Registro de prodcutos`: El sistema permite realizar la creación de prodcutos 
- `Edición de productos`: El sistema permite realizar la actualización de un producto


## Compilar e iniciar el proyecto

Clonar el repositorio o descargarlo en .zip/rar

Se debe ejecutar ``` npm install ``` para instalar los modulos de Node utilizados para este proyecto. 

Para inicializar los servicios se debe ejecutar ``` npm start ```

```
Se debe crear un archivo  .env en la raiz del proyecto, y asiganar los valores correspondientes al entorno e información de la base de datos.

##Contenido -env

DBUSER=
DBPASS=
DBSERVER=
DBSCHEMA=


## Scripts definidos

 "scripts": {
    "dev": "nodemon src/app.js",
    "start": "node app.js"
  }

```

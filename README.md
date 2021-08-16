# Sapiens
### Cursos online

[Ver el sitio funcionando aqui](https://sharp-leavitt-586b0f.netlify.app/)

Sapiens es un sitio web, orientada a cursos online en video. Creada con React JS para el curso de Coder House 2021

En este sitio los usuarios pueden:

- Crearse Perfiles con sus datos y actualizarlos
- Navegar entre los cursos
- Agregar Cursos al Carrito
- Comprar
- Llevar un registro de los cursos comprados desde el perfil con sus respectivos *IDs*
En caso de no estar logueados, tambien se pueden comprar cursos.

![Image text](https://github.com/GabrielConforte/cursos-Conforte/blob/master/GIF%2015-8-2021%2015-13-57.gif)

Todo los datos estan alojados en firebase. Los usuarios al comprar reciben una id que esta relacionada con el pedido que realizaron. Ademas en caso de estar logueados, tendran una id que se relaciona con los pedidos. Esto sirve para llevar el registro de a quien pertenece cada compra.

 *user con id*

![Image text](https://github.com/GabrielConforte/cursos-Conforte/blob/master/doc%20files/user%20ids.png)
 
 *panel de usuarios*

![Image text](https://github.com/GabrielConforte/cursos-Conforte/blob/master/doc%20files/panel%20de%20usuarios%20en%20firebase.png)

 *pedidos con user id*
 
 ![Image text](https://github.com/GabrielConforte/cursos-Conforte/blob/master/doc%20files/pedidos%20con%20user%20id.png)

 *pedidos sin user id*

 ![Image text](https://github.com/GabrielConforte/cursos-Conforte/blob/master/doc%20files/pedidos%20sin%20user%20ide.png)


#### Todo el sitio posee contenido mockup como lorem ipsum y no es real
#### Hay un error con el navBar cuando se esta en modo celular. Resulta ser una incompativilidad con el modo de desarrollo en el build final no esta.

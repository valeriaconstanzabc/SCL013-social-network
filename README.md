# LOFCHE - Colaborando en comunidad

## Índice

* [1. Introducción](#1.-introducción) 
* [2. Producto](#2.-producto)
	* [2.1 Definición del producto](###2.1-definición-del-producto)
	* [2.2 Usuario objetivo](###2.2-usuario-objetivo)
	* [2.3 Usabilidad del producto](###2.3-usabilidad-del-producto)
* [3. Historias de Usuario](##3.-historias-de-usuario)
	* [3.1 Historia 1](###3.1-historia-1)
	* [3.2 Historia 2](###3.2-historia-2)
	* [3.3 Historia 3](###3.3-historia-3)
	* [3.4 Historia 4](###3.4-historia-4)
	* [3.5 Historia 5](###3.5-historia-5)
	* [3.6 Deficinión de terminado](###3.6-definición-de-terminado)
* [4.Proceso de Diseño](##4.-proceso-de-diseño)
	* [4.1 Prototipos](###4.1-prototipos)
		* [4.1.1 Prototipo baja fidelidad InVision](###4.1.2-prototipo-baja-fidelidad-invision)
		* [4.1.2 Prototipo alta fidelidad Figma](###4.1.3-prototipo-alta-fidelidad)
	* [4.2 Paletas de colores](###4.2-paleta-de-colores)
* [5. Testeos usabilidad](##5.-testeos-usabilidad)
* [6. Diagrama de flujo](##6.-diagrama-de-flujo)
*  [7. Boilerplate](##7.-boilerplate)
*  [8. Aspectos a mejorar](##8.-aspectos-a-mejorar)
*  [9. Planificación](##9.-planificacion)

## 1. Introducción

**Lofche** significa "Comunidad" en el idioma Mapudungun.
¡Y eso es lo que somos! Una comunidad para averiguar todas aquellas cosas que no sabemos, aquellas cosas que buscamos y no encontramos. ¡Ayuda y conexión constante con tu ciudad y las almas que viven en ella! 


Para visitar y conocer **Lofche**, haz click [**aquí**](lofche-5e070.web.app).

## 2. Producto

### 2.1 Definición del producto

Red social dirigida a personas que pertenezcan a una comunidad, vecindad o barrio, que deseen conectar y generar redes de apoyo. 

### 2.2 Usuario objetivo 

Personas de un rango de edad de los 20 a los 40 años que busquen integrarse más a su  comunidad y crear lazos colaborativos.

### 2.3 Usabilidad del producto

Genera un espacio en donde los miembros de una comunidad barrial/vecindad puedan resolver inquietudes, solicitar información, ayudar a vecinos que lo necesiten y generar redes de apoyo.

## 3. Historias de Usuario
### 3.1 Historia 1
Como vecin@ quiero una página en donde pueda comunicarme con las personas de mi barrio.

 **Criterios de aceptación:**
 - [x] El usuario podrá acceder a una página dirigida a la conectividad barrial.
 - [x] El usuario podrá ver información de qué trata la página (red social).
 - [x] La página podrá visualizarse desde cualquier dispositivo.
  - [x] Historia en prototipado de **baja fidelidad**.
 - [x] Historia en prototipado de **alta fidelidad**.
 
### 3.2 Historia 2
Como usuario quiero poder registrarme a la página.

 **Criterios de aceptación:**
- [x] El usuario podrá acceder a la opción de registrarse.
- [x] El usuario podrá registrarse con Google.
- [x] El usuario podrá registrarse con Facebook.
- [x] El usuario podrá registrarse en la página.
- [x] El usuario recibirá verificación de su registro en su correo electrónico.
 - [x] Historia en prototipado de **baja fidelidad**.
 - [x] Historia en prototipado de **alta fidelidad**.

### 3.3 Historia 3
Yo como usuario quiero Iniciar Sesión para ingresar a la página.

 **Criterios de aceptación:**
 - [x] El usuario podrá acceder al formulario para iniciar sesión.
 - [x] Podrá iniciar sesión con cuenta de Google.
 - [x] Podrá iniciar sesión con cuenta de Facebook.
 - [x] Una vez iniciada la sesión debe llevar al muro de la web.
 - [x] Historia en prototipado de **baja fidelidad**.
 - [x] Historia en prototipado de **alta fidelidad**.

### 3.4 Historia 4
Como usuario quiero postear publicaciones para que mis vecinos las vean y le den like (comentar, guardar publicación, notificaciones). 

 **Criterios de aceptación:**
- [x] El usuario podrá acceder a sección en donde aparezca el muro de publicaciones.
- [x] Las publicaciones se verán por fecha y hora de posteo.
- [x] Historia en prototipado de **baja fidelidad**.
 - [x] Historia en prototipado de **alta fidelidad**.

**Validaciones**
- [x] Al publicar, se debe validar que exista contenido en el input.

**Comportamiento**
- [x] Al recargar la aplicación, se debe verificar si el usuario está _logueado_ antes de mostrar contenido.
- [x] Poder publicar un _post_.
- [x] Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
- [x] Llevar un conteo de los _likes_.
- [x] Poder eliminar un post específico.
- [x] Pedir confirmación antes de eliminar un _post_.
- [x] Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_ que permita editar el texto y luego guardar los cambios.
- [x] Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
- [x] Al recargar la página debo de poder ver los textos editados.

### 3.5 Historia 5
Como usuario quiero tener un perfil para que mis vecinos me conozcan (nombre, nombre de usuario, foto,  aporte/emprendimiento). 

 **Criterios de aceptación:**
- [x] El usuario podrá acceder a una sección de la página en donde se pueda editar su perfil.
- [ ] El usuario podrá editar su nombre.
- [ ] El usuario podrá editar su nombre de usuario.
- [ ] El usuario podrá colocar una foto de perfil.
- [ ] El usuario podrá colocar información de su aporte a la comunidad .
- [x] Historia en prototipado de **baja fidelidad**.
 - [x] Historia en prototipado de **alta fidelidad**.
 
### 3.8 Deficinión de terminado

- [x] Debe ser una SPA.
- [x] Debe ser _responsive_.
- [x] Deben haber recibido _code review_ de al menos una compañera de otro equipo.
- [ ] Hicieron los _test_ unitarios
- [x] Testearon manualmente buscando errores e imperfecciones simples.
- [x] Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los usuarios como mejoras.
- [x] Desplegaron su aplicación y etiquetaron la versión (git tag).

## 4. Proceso de Diseño 
La lluvia de ideas en el desarrollo de este proyecto dio la creación de prototipos de baja fidelidad en **papel y lápiz** como también en **invision**. Como también a prototipos de alta fidelidad en  **Figma**.

### 4.1.1 Prototipo baja fidelidad InVision
Para visualizar este prototipo en su página, haz click [**aquí.**](https://nathaliachvez7464.invisionapp.com/freehand/Red-Social-AXcl8aha7?v=iHTxHJGScnBjHjr3658MXg%3D%3D&linkshare=urlcopied)
![Papel y Lápiz](http://imgfz.com/i/JeghYwy.png)
### 4.1.2 Prototipo alta fidelidad Figma 
El prototipo de alta fidelidad lo puedes visualizar [**aquí.**](https://www.figma.com/file/eaSR40o4BIC9QTmQFwP3U7/Untitled?node-id=104%3A40)
![Figma 1](http://imgfz.com/i/4x3A1hp.png)
![Figma 2](http://imgfz.com/i/5sXT8GN.png)
![Figma 3](http://imgfz.com/i/XGNkawc.png)
### 4.2 Paletas de colores
![Paleta colores 1](http://imgfz.com/i/JumbVTy.jpeg)
## 5. Testeos usabilidad
Utilizando el prototipo de alta fidelidad, se realizó el testeo de usabilidad y de diseño en **Maze**, hecho con **11 testers**. En general, recibimos buenos comentarios respecto a la página, tanto en lo funcional como en lo gráfico. Sin embargo, implementamos Con ese feedback se recopilar respuestas en las que nos basamos para algunas mejoras en el proyecto final.  Uno de los cambios hechos fueron los siguientes: 

- [x] Cambio de logo a uno más cercano al nombre de la red social. 
- [x] Se cambió el texto de bienvenida por uno más cercano. 
- [x] Se modificó el formulario de registro de la página para que fuera maś conciso. 

Para visitar el detalle de los resultados de los testeos de usabilidad haz click [**aquí**](https://maze.design/r/953d6bkbmu0ts9).

## 6. Diagrama de flujo
![Diagrama 1](http://imgfz.com/i/zZ248dQ.jpeg)
![Diagrama 2](http://imgfz.com/i/8tiv3YF.jpeg)
## 7. Boilerplate
Este proyecto se desarrolló con tecnologías web con los siguientes lenguajes: HTML5, CSS y Javascript (ES6). Siendo el último, el lenguaje más utilizado en este trabajo.  
├src
├─ Views
│   ├── Components
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Others.js
│   └── Pages
│       ├── 404.js
│       ├── Feed.js
│       ├── LogIn.js
│       ├── Profile.js
│       ├── SignIn.js
│       └── Welcome.js
├── imagenes
├── index.html
├── lib
│   ├── firebase-functions.js
│   ├── register.js
│   └── router.js
├── main.js
└── style.css

## 8. Aspectos a mejorar 
**Funcionales**
- [x] Implementar vista de "Amigos" y "Notificaciones" a la red social.
- [x] Funcionalidad y vista de perfil de amigos.
- [x] Agregar amigos y que sus posts sean visto en el muro del usuario logeado.
- [x] Agregar fotos a los posteos del muro. 
- [x] Se modificó el formulario de registro de la página para que fuera maś conciso. 

**Técnicos**
- [x] Implementar History API.
- [x] localStorage.
- [x] Testeos de funciones firebase.
- [x] Testeos de funciones firebase con Mocking.

## 9. Planificación 
Desarrollamos un sistema de trabajo según los tiempos y necesidades de cada una de las integrantes del grupo, simulando un horario laboral dentro de lo posible. La planificación la implementamos con Trello, una herramienta de gestión de proyectos. Para conocer en detalle nuestra planificación, haz click [**aquí**](https://trello.com/b/U8RBa7ZO/rrss).
![Trello](http://imgfz.com/i/ZXYB1Su.png)
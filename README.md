Es importante tener instalado xampp, vsc, node js, git y composer

Para la ejecución del proyecto se debe realizar lo siguiente

1. En la carpeta xampp (suele estar en Este Equipo, abrir el dispositivo que aparece), ingresar a htdocs
2. Dar click derecho y abrir con open git bash here (puede estar en Mostrar más opciones)
3. Ahora, en la bash clonar el repositorio de la siguiente manera
   
   git clone https://github.com/MARIAALEJANDRA2022/Prueba-Tecnica.git
5. Activar apache y MySQL en xampp
6. En xampp, en la parte de MySQL dar click en admin, en la ventana que se abre hacer click en new y ponerle a la bd equipo_academico
7. Abrir en vsc la carpeta que se creo al clonar el repositorio
8. Crear el .env con los datos del archivo .env.example a su mismo nivel, se encuentra en la carpeta prueba-tecnica-backend
9. Dentro de vsc abrir una terminal para levantar el servidor y otra para iniciar el frontend
   
   9.1. Para levantar el servidor
   
         * Cambiar a la carpeta prueba-tecnica-backend de la siguiente manera cd prueba-tecnica-backend
         * Ejecutar composer install
         * Ejecutar php artisan migrate
         * Ejecutar php artisan serve
   9.2. Para iniciar el frontend
   
         * Cambiar a la carpeta prueba-tecnica-frontend de la siguiente manera cd prueba-tecnica-frontend
         * Ejecutar npm install
         * Ejecutar npm start
10. De esa manera ya se puede utilizar la aplicación

Nota: 

Para iniciar sesión usar

   email: admin@abcaprender.com
   password: admin

o
   email: gestor@abcaprender.com
   password: gestor

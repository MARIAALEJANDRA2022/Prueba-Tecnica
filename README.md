Es importante tener instalado xampp, vsc, node js, git y composer

Para la ejecución del proyecto se debe realizar lo siguiente

1. En la carpeta xampp, ingresar a htdocs
2. Dar click derecho y abrir con open git bash here (puede estar en Mostrar más opciones)
3. Ahora, en la bash clonar el repositorio de la siguiente manera
   
   git clone https://github.com/MARIAALEJANDRA2022/Prueba-Tecnica.git
5. Activar apache y MySQL en xampp
6. Abrir la carpeta que se creo al clonar el repositorio en vsc
7. Dentro de vsc abrir una terminal para levantar el servidor y otra para iniciar el frontend
   
   6.1. Para levantar el servidor
   
         * Cambiar a la carpera prueba-tecnica-backend de la siguiente manera cd prueba-tecnica-backend
         * Ejecutar composer install
         * Ejecutar php artisan migrate
         * Ejecutar php artisan serve
   6.2. Para iniciar el frontend
   
         * Cambiar a la carpeta prueba-tecnica-frontend de la siguiente manera cd prueba-tecnica-frontend
         * Ejecutar npm install
         * Ejecutar npm start
9. De esa manera ya se puede utilizar la aplicación

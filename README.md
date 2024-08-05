Es importante tener instalado xampp, vsc, node js, git y composer

Para la ejecución del proyecto se debe realizar lo siguiente

1. En la carpeta xampp, ingresar a htdocs
2. Dar click derecho y abrir con open git bash here (puede estar en Mostrar más opciones)
3. Ahora, en la bash clonar el repositorio de la siguiente manera git clone https://github.com/MARIAALEJANDRA2022/Prueba-Tecnica.git
4. Activar apache y MySQL en xampp
5. Abrir la carpeta creada en el paso 1 en vsc
6. Dentro de vsc abrir una terminal para levantar el servidor y otra para iniciar el frontend
   
   6.1. Para levantar el servidor
   
         * Cambiar a la carpera prueba-tecnica-backend de la siguiente manera cd prueba-tecnica-backend
         * Ejecutar php artisan migrate
         * Ejecutar php serve
   6.2. Para iniciar el frontend
   
         * Cambiar a la carpeta prueba-tecnica-frontend de la siguiente manera cd prueba-tecnica-frontend
         * Ejecutar npm start
7. De esa manera ya se puede utilizar la aplicación

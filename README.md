Es importante tener instalado xampp, vsc, node js, git y composer

Para la ejecución del proyecto se debe realizar lo siguiente

1. En la carpeta xampp, ingresar a htdocs y crear una carpeta
2. En la carpeta que se creo clonar el repositorio de la siguiente manera git clone https://github.com/MARIAALEJANDRA2022/Prueba-Tecnica.git
3. Abrir la carpeta creada en el paso 1 en vsc
4. Dentro de vsc abrir una terminal para levantar el servidor y otra para iniciar el frontend
   4.1. Para levantar el servidor
         * Cambiar a la carpera prueba-tecnica de la siguiente manera cd prueba-tecnica
         * Ejecutar php artisan migrate
         * Ejecutar php serve
   4.2. Para iniciar el frontend
         * Cambiar a la carpeta prueba-tecnica-frontend de la siguiente manera cd prueba-tecnica-frontend
         * Ejecutar npm start
5. De esa manera ya se puede utilizar la aplicación

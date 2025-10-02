
Proyecto Node.js – Gestión de Productos con FakeStore API

Proyecto en Node.js que permite interactuar con la FakeStore API mediante la terminal. 
Permite obtener, crear, actualizar y eliminar productos directamente desde la terminal.

1️⃣ Configuración Inicial

Crear un directorio para el proyecto y un archivo index.js como punto de entrada.

Inicializar Node.js con npm y configurar el proyecto para que use módulos ES6.

Definir la URL base de la API en una constante al inicio del archivo.

Configurar el script start en package.json para ejecutar el archivo principal.

2️⃣ Uso / Comandos

La sintaxis básica para interactuar con la API es ingresar un método, un endpoint y, si corresponde, argumentos adicionales desde la terminal.

Se pueden realizar las siguientes operaciones:

Obtener todos los productos: trae la lista completa de productos de la API (npm run start GET products).

Obtener un producto específico por ID: permite ver los detalles de un solo producto (npm run start GET products/15).

Crear un nuevo producto: se deben proporcionar título, precio y categoría (npm run start POST products T-Shirt-Rex 300 remeras).

Eliminar un producto por ID: simula la eliminación de un producto específico (npm run start DELETE products/7).

Actualizar un producto existente: se deben proporcionar título, precio y categoría para el producto indicado.

3️⃣ Validaciones y restricciones

Siempre se verifica que se ingresen un método y un endpoint.

Para los métodos que requieren datos (POST y PUT), se valida que se incluyan los argumentos obligatorios y que el precio sea un número válido.

Después de cada llamada a la API, se comprueba si la respuesta fue exitosa antes de procesarla, permitiendo capturar errores de servidor como 404 o 500.

4️⃣ Notas de Desarrollo

Se utiliza process.argv para capturar los argumentos desde la consola.

Se usa Fetch API para todas las comunicaciones con la API.

La lógica principal se organiza mediante estructuras de control (if/else o switch) según el método ingresado.

Se aplican buenas prácticas de JavaScript moderno, como destructuring, manipulación de arrays y centralización de la URL de la API.

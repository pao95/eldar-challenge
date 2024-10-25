# Backend-eldar

Backend básico de autenticación y autorización con Node.js, Express, MongoDB y Mongoose.

## Descripción

Este proyecto proporciona un sistema de autenticación mediante JWT para manejar sesiones seguras, que permite el registro y login de usuarios, así como la protección de rutas mediante tokens.

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [MongoDB](https://www.mongodb.com/) instalado localmente o como servicio en la nube (por ejemplo, MongoDB Atlas)

## Instalación

1. Clonar el repositorio en la máquina local:
    ```bash
    git clone https://github.com/tu-usuario/auth-node.git
    ```
   
2. Acceder al directorio del proyecto:
    ```bash
    cd backend-eldar
    ```

3. Instalar las dependencias:
    ```bash
    npm install
    ```

4. Configurar las variables de entorno en un archivo `.env` en la raíz del proyecto (se envia por mail):
    ```env
    
    ```
5. Ejecutar el proyecto en modo desarrollo
    ```bash
    npm run dev
    ```

## Scripts

- `npm run dev`: Inicia el servidor en modo desarrollo con **Nodemon**.
- `npm start`: Inicia el servidor en modo producción.

# Frontend - Challenge Eldar

Aplicación frontend para el challenge de Eldar, construida con React y Vite, que incluye autenticación de usuarios, manejo de roles, y permisos para acceder a contenido privado. La aplicación también permite la visualización, edición, y creación de publicaciones (posts) de usuarios.

## Descripción

Este proyecto permite a los usuarios registrarse, iniciar sesión y cerrar sesión. Una vez autenticados, los usuarios pueden acceder a una lista de publicaciones que se obtiene de la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com). Solo los usuarios con rol de administrador pueden editar y crear publicaciones. 

## Tecnologías

- **React 18**: Biblioteca de JavaScript para la creación de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones web.
- **Material UI**: Framework de componentes de interfaz de usuario para React.
- **Redux Toolkit**: Manejo del estado global y autenticación.
- **React Hook Form**: Manejo de formularios con validación.
- **React Router DOM**: Enrutamiento para definir páginas públicas y privadas.
- **Axios**: Para realizar solicitudes HTTP a la API.

## Requisitos previos

- [Node.js](https://nodejs.org/) 

## Instalación

1. Clonar
    ```bash
    git clone https://github.com/tu-usuario/frontend-eldar.git
    ```

2. Acceder al directorio del proyecto:
    ```bash
    cd frontend-eldar
    ```

3. Instalar las dependencias:
    ```bash
    npm install
    ```

4. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto
    ```env
    VITE_API_AUTH_URL=http://localhost:4000/api/auth
    VITE_API_JSON_PLACEHOLDER_URL=https://jsonplaceholder.typicode.com
    ```

5. Ejecutar el proyecto en modo desarrollo
    ```bash
    npm run dev
    ```



## Scripts

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Previsualiza el resultado de producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.

## Funcionalidades

- **Autenticación de usuario**:

- **Registro de usuario**: 

- **Listado de post**: 

- **Creación de post**:

- **Edicion de post**:



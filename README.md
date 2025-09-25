# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# EFSI-TP10" 

## Cómo ejecutar el proyecto (Windows)

### Requisitos
- Tener instalado **Node.js 18+** (incluye npm). Verifica con `node -v` y `npm -v`.

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```
Luego abre en el navegador la URL que muestra la consola (por defecto `http://localhost:5173/`).

### Generar build de producción
```bash
npm run build
```

### Previsualizar el build
```bash
npm run preview
```
Esto levanta un servidor local para revisar el resultado de `dist/`.

Nota: Si el puerto por defecto está ocupado, Vite elegirá otro y lo indicará en la consola.
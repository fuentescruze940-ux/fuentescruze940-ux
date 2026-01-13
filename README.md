# Blog Personal - Juan Eduardo Fuentes Cruz

Blog personal profesional construido con Next.js 16, diseño moderno y formulario de contacto integrado con Google Sheets.

## 🌟 Características

- **Next.js 16**: Framework moderno de React con App Router
- **Diseño Moderno y Responsivo**: Interfaz elegante con tema oscuro/claro
- **TypeScript**: Código tipo seguro
- **Formulario de Contacto Funcional**: Integración con Google Sheets para almacenar mensajes
- **Optimizado para Vercel y GitHub Pages**: Listo para desplegar
- **Componentes Modulares**: Código organizado y mantenible

## 📂 Estructura del Proyecto

```
blog-personal/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout principal
│   ├── globals.css           # Estilos globales
│   └── api/
│       └── contact/
│           └── route.ts      # API para formulario de contacto
├── components/
│   ├── sidebar.tsx           # Navegación lateral
│   ├── hero.tsx              # Sección hero
│   ├── about.tsx             # Sección sobre mí
│   ├── blog.tsx              # Sección blog
│   ├── projects.tsx          # Sección proyectos
│   └── contact.tsx           # Formulario de contacto
├── package.json
└── README.md
```

## 🚀 Instalación Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/blog-personal.git
   cd blog-personal
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_GOOGLE_SHEET_URL=tu_url_de_google_apps_script_aqui
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Visitar**: Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📝 Configuración de Google Sheets

Para que el formulario de contacto funcione, necesitas configurar Google Sheets:

### Paso 1: Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com) y crea una nueva hoja de cálculo
2. Nómbrala "Contactos Blog" o como prefieras
3. En la primera fila, agrega estos encabezados:
   - A1: `Fecha`
   - B1: `Nombre`
   - C1: `Email`
   - D1: `Asunto`
   - E1: `Mensaje`

### Paso 2: Crear Apps Script

1. En tu Google Sheet, ve a **Extensiones → Apps Script**
2. Borra todo el código existente y pega este:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.subject,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el proyecto (dale un nombre como "Blog Contact Form")
4. Haz clic en **Implementar → Nueva implementación**
5. Selecciona **Aplicación web**
6. Configura:
   - **Ejecutar como**: Tu cuenta
   - **Quién tiene acceso**: Cualquier persona
7. Haz clic en **Implementar**
8. **Copia la URL** que aparece (se ve como: `https://script.google.com/macros/s/ABC.../exec`)

### Paso 3: Actualizar las Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza con la URL que copiaste:

```env
NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/TU_URL_AQUI/exec
```

3. Reinicia el servidor de desarrollo (`npm run dev`)

¡Listo! Ahora el formulario de contacto está completamente funcional.

## 🌐 Despliegue

### Desplegar en Vercel (Recomendado)

1. **Conectar con GitHub**
   - Sube tu código a GitHub
   - Ve a [Vercel](https://vercel.com)
   - Importa tu repositorio

2. **Configurar Variables de Entorno**
   - En Vercel, ve a Settings → Environment Variables
   - Agrega: `NEXT_PUBLIC_GOOGLE_SHEET_URL` con tu URL de Google Apps Script

3. **Desplegar**
   - Vercel desplegará automáticamente tu sitio
   - Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`

### Desplegar en GitHub Pages

1. **Instalar el adaptador**
   ```bash
   npm install --save-dev next-export-optimize-images
   ```

2. **Actualizar next.config.mjs**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/tu-repositorio',
     images: {
       unoptimized: true,
     },
   }
   ```

3. **Construir**
   ```bash
   npm run build
   ```

4. **Subir a GitHub**
   - El contenido de la carpeta `out/` debe ir a la rama `gh-pages`

5. **Activar GitHub Pages**
   - Ve a Settings → Pages en tu repositorio
   - Selecciona la rama `gh-pages`

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --bg-primary: #0a0e27;      /* Color de fondo principal */
  --accent: #64ffda;           /* Color de acento */
  /* ... más colores */
}
```

### Modificar Contenido

- **Información personal**: Edita `components/sidebar.tsx` para el nombre y redes sociales
- **Hero**: Edita `components/hero.tsx`
- **Sobre Mí**: Edita `components/about.tsx`
- **Artículos del blog**: Edita el array `posts` en `components/blog.tsx`
- **Proyectos**: Edita el array `projects` en `components/projects.tsx`

### Redes Sociales

Actualiza los enlaces en `components/sidebar.tsx`:

```tsx
<Link href="https://github.com/tu-usuario" target="_blank">
  <Github size={20} />
</Link>
```

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Responsive: Desktop, Tablet, Mobile
- ✅ Modo oscuro y claro
- ✅ Next.js 16 con React 19

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Juan Eduardo Fuentes Cruz**

- GitHub: [@TU_USUARIO](https://github.com/TU_USUARIO)
- Email: juan.fuentes@email.com

## 🙏 Tecnologías

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- Fuentes: [Google Fonts - Inter & JetBrains Mono](https://fonts.google.com/)

---

⭐️ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!

# Blog Personal - Juan Eduardo Fuentes Cruz

Portfolio y blog personal profesional construido con Next.js 16, con navegación por páginas, diseño moderno con modo oscuro/claro y formulario de contacto funcional con Google Sheets.

## 🌟 Características

- **Next.js 16 con App Router**: Framework moderno de React
- **Navegación por Páginas**: Cada sección es una página independiente
- **Modo Oscuro/Claro**: Cambio de tema persistente
- **Diseño Responsivo**: Perfecto en desktop, tablet y móvil
- **TypeScript**: Código tipo seguro
- **Formulario de Contacto con Google Sheets**: Almacenamiento real de mensajes
- **Optimizado para SEO**: Metadata configurada
- **Listo para Desplegar**: Compatible con Vercel y GitHub Pages

## 📂 Estructura del Proyecto

```
blog-personal/
├── app/
│   ├── page.tsx                    # Página de inicio
│   ├── sobre-mi/page.tsx           # Página sobre mí
│   ├── habilidades/page.tsx        # Página de habilidades
│   ├── proyectos/page.tsx          # Página de proyectos
│   ├── blog/
│   │   ├── page.tsx                # Lista de artículos
│   │   └── [slug]/page.tsx         # Página individual de artículo
│   ├── contacto/page.tsx           # Página de contacto
│   ├── layout.tsx                  # Layout principal
│   ├── globals.css                 # Estilos globales
│   └── api/
│       └── contact/route.ts        # API para formulario
├── components/
│   └── sidebar.tsx                 # Barra lateral de navegación
├── public/
├── package.json
└── README.md
```

## 🚀 Instalación y Uso Local

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone https://github.com/tu-usuario/blog-personal.git
   cd blog-personal
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Crear archivo de variables de entorno**
   
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000)

## 📝 Configuración de Google Sheets (Formulario de Contacto)

Para que el formulario de contacto funcione y almacene los mensajes en Google Sheets, sigue estos pasos:

### Paso 1: Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com) y crea una nueva hoja
2. Nómbrala "Contactos Blog" (o el nombre que prefieras)
3. En la primera fila, crea estos encabezados:
   - **A1**: `Fecha`
   - **B1**: `Nombre`
   - **C1**: `Email`
   - **D1**: `Asunto`
   - **E1**: `Mensaje`

### Paso 2: Crear el Script de Google Apps

1. En tu Google Sheet, ve al menú **Extensiones → Apps Script**
2. Borra todo el código que aparece por defecto
3. Pega este código:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Agregar nueva fila con los datos del formulario
    sheet.appendRow([
      new Date().toLocaleString('es-MX'),
      data.nombre,
      data.email,
      data.asunto,
      data.mensaje
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

4. Guarda el proyecto (Ctrl+S o Cmd+S)
5. Dale un nombre al proyecto, por ejemplo: "Blog Contact Form Handler"

### Paso 3: Implementar como Aplicación Web

1. Haz clic en el botón **Implementar** (arriba a la derecha)
2. Selecciona **Nueva implementación**
3. Haz clic en el ícono de engranaje junto a "Tipo" y selecciona **Aplicación web**
4. Configura:
   - **Descripción**: "Formulario de contacto del blog"
   - **Ejecutar como**: **Yo** (tu cuenta)
   - **Quién tiene acceso**: **Cualquier persona**
5. Haz clic en **Implementar**
6. Autoriza el script (si es la primera vez)
7. **Copia la URL** que aparece (formato: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

### Paso 4: Configurar en tu Proyecto

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Pega la URL copiada:

```env
NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/SCRIPT_ID_AQUI/exec
```

3. Guarda el archivo
4. Reinicia el servidor de desarrollo:
   ```bash
   # Detén el servidor (Ctrl+C) y vuelve a iniciar
   npm run dev
   ```

### Paso 5: Probar el Formulario

1. Ve a [http://localhost:3000/contacto](http://localhost:3000/contacto)
2. Completa el formulario y envíalo
3. Revisa tu Google Sheet, debería aparecer una nueva fila con los datos

¡Listo! Tu formulario de contacto está completamente funcional.

## 🌐 Despliegue en Producción

### Opción 1: Vercel (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub

3. **Configurar Variables de Entorno**
   - En el panel de Vercel, ve a "Settings → Environment Variables"
   - Agrega la variable:
     - **Name**: `NEXT_PUBLIC_GOOGLE_SHEET_URL`
     - **Value**: Tu URL de Google Apps Script
   - Haz clic en "Save"

4. **Desplegar**
   - Vercel desplegará automáticamente
   - Tu sitio estará en: `https://tu-proyecto.vercel.app`

### Opción 2: GitHub Pages

1. **Instalar dependencias adicionales**
   ```bash
   npm install --save-dev @next/env
   ```

2. **Actualizar `next.config.mjs`**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/nombre-repositorio' : '',
     images: {
       unoptimized: true,
     },
   }
   
   export default nextConfig
   ```

3. **Construir el proyecto**
   ```bash
   npm run build
   ```

4. **Desplegar en GitHub Pages**
   - Sube la carpeta `out/` a la rama `gh-pages`
   - Activa GitHub Pages en Settings → Pages
   - Selecciona la rama `gh-pages`

**Nota**: Para GitHub Pages, la variable de entorno debe estar en el código o usar un servicio externo, ya que GitHub Pages no soporta variables de entorno del lado del servidor.

## 🎨 Personalización

### Información Personal

Edita `components/sidebar.tsx`:

```tsx
<h1 className="text-xl font-bold text-sidebar-foreground mb-1">
  Tu Nombre Aquí
</h1>
<p className="text-sm text-sidebar-foreground/60">Tu Título</p>
```

### Enlaces de Redes Sociales

En `components/sidebar.tsx`, actualiza las URLs:

```tsx
<a href="https://github.com/tu-usuario" ...>
<a href="https://linkedin.com/in/tu-usuario" ...>
```

### Página de Inicio

Edita `app/page.tsx` para cambiar el contenido del hero.

### Sobre Mí

Edita `app/sobre-mi/page.tsx` para actualizar tu biografía y experiencia.

### Habilidades

Edita `app/habilidades/page.tsx` para agregar/modificar tus habilidades.

### Proyectos

Edita el array `projects` en `app/proyectos/page.tsx` con tus proyectos reales.

### Artículos del Blog

Edita el array `posts` en `app/blog/page.tsx` para agregar tus artículos.

### Colores del Tema

Edita `app/globals.css` para cambiar los colores:

```css
:root {
  --primary: oklch(0.45 0.2 252);  /* Azul principal */
  /* Modifica estos valores para cambiar los colores */
}
```

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo (localhost:3000)
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
```

## 📱 Compatibilidad

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Responsive Design (Desktop, Tablet, Mobile)
- ✅ Modo oscuro y claro con persistencia
- ✅ Next.js 16 + React 19
- ✅ TypeScript 5

## 🐛 Solución de Problemas

### El formulario no envía datos

1. Verifica que la URL de Google Apps Script esté correcta en `.env.local`
2. Asegúrate de que el script esté implementado como "Cualquier persona"
3. Revisa la consola del navegador para errores

### Error al hacer npm install

```bash
# Limpia la caché de npm
npm cache clean --force

# Elimina node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Reinstala
npm install
```

### El tema no persiste al recargar

Asegúrate de que localStorage esté habilitado en tu navegador.

## 📚 Tecnologías Utilizadas

- [Next.js 16](https://nextjs.org/) - Framework de React
- [React 19](https://react.dev/) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework de CSS
- [Lucide Icons](https://lucide.dev/) - Iconos
- [Google Sheets API](https://developers.google.com/sheets) - Base de datos
- [Vercel Analytics](https://vercel.com/analytics) - Analíticas

## 👤 Autor

**Juan Eduardo Fuentes Cruz**

- GitHub: [@juaneduardo](https://github.com/juaneduardo)
- LinkedIn: [juaneduardo](https://linkedin.com/in/juaneduardo)
- Email: juan.fuentes@email.com

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tus propios proyectos.

## 🙏 Agradecimientos

- Diseño inspirado en portfolios modernos
- Construido con las mejores prácticas de Next.js
- Optimizado para rendimiento y SEO

---

⭐️ Si este proyecto te fue útil, ¡considera darle una estrella en GitHub!

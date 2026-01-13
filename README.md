# Blog Personal - Juan Eduardo Fuentes Cruz

Portfolio y blog personal profesional construido con Next.js 16.

## Instalación

```bash
npm install
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000)

## Configuración Google Sheets

1. Crea una Google Sheet con columnas: Fecha, Nombre, Email, Asunto, Mensaje
2. Ve a Extensiones → Apps Script y pega:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
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

3. Implementa como Aplicación Web (acceso: Cualquier persona)
4. Copia la URL y agrégala a `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

## Despliegue

### Vercel (Recomendado)
```bash
git push origin main
```
Importa en [vercel.com](https://vercel.com) y agrega las variables de entorno.

### GitHub Pages
```bash
npm run build
```
Sube la carpeta `out/` a la rama `gh-pages`.

## Tecnologías
- Next.js 16 + React 19
- TypeScript 5
- Tailwind CSS v4
- Google Sheets API

## Autor
Juan Eduardo Fuentes Cruz

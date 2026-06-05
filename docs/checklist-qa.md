# Checklist QA antes de entregar

Marca cada punto cuando lo hayas revisado.

## Instalacion y ejecucion

- [ x] Ejecute `npm install` sin errores.
- [ x] Ejecute `npm run start` correctamente.
- x[ ] El sitio abre en `http://localhost:5173/`.
- [x ] JSON Server abre en `http://localhost:3001/visitantes`.

## Funcionalidad

- [ ]x El formulario permite guardar registros validos.
- [ x] Los registros aparecen en `db.json` o en la URL de JSON Server.
- [ x] La tabla muestra los registros guardados.
- [ x] El boton actualizar funciona.
- [ x] El buscador funciona.
- [ x] El filtro por interes funciona.
- [x ] El grafico se actualiza con los datos.
- [ ]x La eliminacion de registros funciona con confirmacion.

## Validaciones

- [ x] El nombre no permite valores vacios o demasiado cortos.
- [ x] El correo debe tener formato valido.
- [ x] El telefono exige una longitud adecuada.
- [ x] El interes principal es obligatorio.
- [x ] El comentario tiene una longitud minima razonable.
- [x ] Los mensajes de error son claros.

## Usabilidad y accesibilidad

- [ x] Los botones explican su accion.
- [ x] Los campos tienen etiquetas claras.
- [x ] Las imagenes tienen atributo `alt`.
- [ x] El contraste permite leer comodamente.
- [ x] El sitio se entiende en celular.
- [ x] La navegacion con teclado conserva foco visible.
- [ x] La informacion esta organizada en secciones.

## Codigo y estructura

- [ x] El HTML usa estructura semantica.
- [ x] El CSS esta organizado.
- [x ] El JavaScript esta separado por responsabilidades.
- [x ] No hay codigo innecesario evidente.
- [ x] La consola no muestra errores criticos.
- [x ] Ejecute `npm run check` y revise los resultados.

## Evidencias y documentos

- [ x] Complete `docs/registro-bugs.md`.
- [x ] Complete `docs/co-evaluacion-pares.md`.
- [ x] Complete `docs/comparacion-antes-despues.md`.
- [ x] Complete `docs/plan-mejora.md`.
- [ ] Agregue capturas en `evidencias/antes/`.
- [ ] Agregue capturas en `evidencias/despues/`.
- [ ] Agregue captura de consola en `evxidencias/consola/`.
- [ ] Agregue captura de JSON Server en `evidencias/json-server/`.

# Registro de bugs priorizado

Completa esta tabla durante la revision del proyecto. Registra minimo 6 hallazgos y corrige minimo 4.

## Escala de prioridad

| Prioridad | Significado |
|---|---|
| Alta | Impide que una funcion importante trabaje correctamente o afecta datos |
| Media | Afecta usabilidad, accesibilidad, claridad o experiencia del usuario |
| Baja | Es una mejora visual, organizativa o de detalle |

## Tabla de bugs

|ID|Título|Prioridad|Problema|
|BUG-001|La tabla no se actualiza al guardar|Alta|"Al guardar un visitante| el usuario no ve el cambio hasta recargar la página|"
|BUG-002|Validación de correo débil|Media|"Solo verifica que exista un ""@"", permitiendo correos como ""a@""."|
|BUG-003|Falta validación mínima en comentarios|Media|"El comentario es obligatorio pero no tiene longitud mínima; un punto ""."" es válido."|
|BUG-004|El teléfono no valida formato colombiano|Media|"El código acepta números muy cortos (ej. ""123"") aunque la validación pide 7, no es suficiente."|

|BUG-005|Falta atributo alt en imágenes|Baja|Las imágenes del proyecto carecen de accesibilidad para lectores de pantalla.|
|BUG-006|Contraste de colores en formulario|Baja|El color de texto en los estados de error puede ser difícil de leer.|

## Ejemplo de redaccion

| ID | Titulo del bug | Area | Prioridad | Pasos para reproducir | Resultado esperado | Resultado obtenido | Evidencia | Correccion aplicada | Estado |
|---|---|---|---|---|---|---|---|---|---|
| BUG-EJEMPLO | La tabla no se actualiza despues de guardar un visitante | JavaScript / Datos | Alta | Completar el formulario con datos validos y presionar Guardar visitante | El nuevo visitante debe aparecer inmediatamente en la tabla | El registro se guarda en JSON Server, pero la tabla no cambia hasta recargar | evidencias/antes/tabla-no-actualiza.png | Se llamo de nuevo la funcion de carga de visitantes despues del POST | Corregido |

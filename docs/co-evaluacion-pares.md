# Coevaluacion entre pares

Completa este formato cuando revises el proyecto de un companero o equipo.

## Datos generales

- Nombre de quien revisa:
- Nombre del companero o equipo revisado:
- Fecha:
- Proyecto revisado:

## Revision tecnica

|Criterio|Observacion|
|El proyecto ejecuta correctamente con npm run start|"Sí, el proyecto arranca tras la instalación de dependencias."|

|JSON Server funciona y muestra datos en /visitantes|"Correcto, el endpoint responde a solicitudes GET/POST."|
|El formulario valida datos obligatorios|Se han implementado validaciones en el cliente para evitar datos nulos|
|La tabla muestra registros correctamente|"Sí, se visualizan los datos tras la corrección del ciclo de renderizado."|
|El sitio es claro para un usuario nuevo|Interfaz intuitiva basada en Bootstrap con etiquetas claras.|

|La vista movil es usable|Diseño responsivo adecuado para dispositivos móviles.|
|La consola no muestra errores criticos|Sin errores en consola tras corregir el orden de carga del DOM.|

|El código está organizado,"Código modularizado correctamente en api.js, app.js y validation.js."|

## Fortalezas encontradas

Escribe minimo dos aspectos positivos del proyecto:

Fortalezas encontradas
Modularidad del código: La separación de responsabilidades permite un mantenimiento escalable del proyecto.

Uso de herramientas profesionales: La integración de SweetAlert2 y Chart.js aporta un valor agregado significativo a la experiencia de usuario.

## Bugs o mejoras recomendadas

|ID sugerido|Observacion|
Prioridad|
Evidencia o pasos para reproducir|

|PAR-001|Falta de actualización automática de la tabla tras el POST.|Alta|Guardar visitante; la tabla no refresca hasta recargar página.|
|PAR-002|Validación de correo permitía valores laxos.|Media|"Ingresar ""a@"" en correo| el sistema lo aceptaba como válido."|
|PAR-003|Falta de atributo alt en imágenes.|Baja|Inspeccionar etiquetas img en el DOM| no contienen descripción.|
## Retroalimentacion escrita

Redacta un parrafo respetuoso y tecnico:
El proyecto presenta una estructura lógica sólida y cumple con los requerimientos funcionales de persistencia de datos. Se recomienda mantener esta modularidad para futuras iteraciones. Se identificaron áreas de oportunidad en la reactividad de la interfaz y la rigurosidad de las reglas de validación en los formularios; aplicar estas mejoras garantiza una mayor integridad de los datos en la base y una experiencia de usuario más fluida y profesional."


## Compromiso de mejora del equipo revisado

Despues de recibir la retroalimentacion, escribe que cambios decidiste aplicar:
Implementación de reactividad: Se invocó la función loadVisitors() tras cada operación exitosa para refrescar la tabla de forma automática.

Robustez en validaciones: Se mejoraron los Regex de validación de correo y se añadieron restricciones de longitud mínima en campos de texto.

Optimización de consola: Se añadieron verificaciones de existencia de elementos (null checks) en chart.js para evitar errores de ejecución en el DOM.

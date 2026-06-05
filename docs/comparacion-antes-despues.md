# Comparacion antes y despues

Usa este documento para demostrar que aplicaste mejoras reales. Cada cambio debe tener evidencia.

| Mejora aplicada | Problema inicial | Evidencia antes | Correccion realizada | Evidencia despues | Como comprobaste que funciono |
|---|---|---|---|---|---|
| Mejora 1 |  | evidencias/antes/ |  | evidencias/despues/ |  |
| Mejora 2 |  | evidencias/antes/ |  | evidencias/despues/ |  |
| Mejora 3 |  | evidencias/antes/ |  | evidencias/despues/ |  |
| Mejora 4 |  | evidencias/antes/ |  | evidencias/despues/ |  |

## Evidencia de consola

Incluye una captura en:

```text
evidencias/consola/
```

Explica aqui que muestra la consola:

- Antes de corregir:
- Despues de corregir:

## Evidencia de JSON Server

Incluye una captura en:

```text
evidencias/json-server/
```

Explica que datos se guardaron correctamente:

- Registro de prueba usado:
- URL revisada:
- Resultado observado:

### Solucion

# Comparacion antes y despues

| Mejora aplicada | Problema inicial | Evidencia antes | Correccion realizada | Evidencia despues | Como comprobaste que funciono |
|---|---|---|---|---|---|
| Actualización tabla | Tabla estática al guardar | evidencias/antes/tabla.png | Se invocó `loadVisitors()` tras POST | evidencias/despues/tabla.png | Registré un nuevo usuario y apareció solo. |
| Validación correo | Correo permitía "a@" | evidencias/antes/correo.png | Se implementó Regex estricto | evidencias/despues/correo.png | Intenté guardar con correo inválido. |
| Validación teléfono | Teléfono < 7 dígitos | evidencias/antes/tel.png | Se forzó longitud >= 7 | evidencias/despues/tel.png | El sistema lanzó el mensaje de error. |
| Validación comentarios | Comentarios vacíos | evidencias/antes/com.png | Se validó longitud mínima | evidencias/despues/com.png | Se activó feedback visual al usuario. |

## Evidencia de consola
- **Antes de corregir:** Errores `404` por desincronización y advertencias de DOM antes de cargar el gráfico.
- **Despues de corregir:** Consola limpia, sin errores de red ni de renderizado.

## Evidencia de JSON Server
- **Registro de prueba usado:** "Juan Pérez", "juan@correo.com", "3001234567".
- **URL revisada:** `http://localhost:3001/visitantes`.
- **Resultado observado:** JSON con estructura correcta y ID único.
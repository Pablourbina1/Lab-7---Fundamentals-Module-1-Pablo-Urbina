# Favorites System
## Parte 2 del laboratorio
#### Link del video de explicación: https://drive.google.com/file/d/1-VRB_6XbN8ZIDtW3nZqTbHW6ZKaHdG2u/view?usp=drive_link 
Esta parte se trato de añadir una opción para marcar paises como favoritos, dando feedback visual como un icono de corazon en la tarjeta del pais dependiendo de si esta o no marcado
como pais favorito. Los paises favoritos se guardan en localstorage, se añadio tambien la opcion de filtrar entre todos los paises y unicamente los paises favoritos, filtro que funciona
junto al search input y el region filter.

## Definition of Done
| Criterio                 | Descripción                                                     |
|--------------------------|-----------------------------------------------------------------|
| Ícono de corazón visible | Cada tarjeta muestra un corazón vacío o relleno                |
| Toggle funciona          | Al hacer clic en el corazón se agrega o elimina de favoritos   |
| Uso de localStorage      | Los favoritos se guardan en `localStorage`                     |
| Filtro de favoritos      | Checkbox o toggle para mostrar solo favoritos                  |
| Retroalimentación visual | Corazón relleno para favoritos, vacío para los demás           |
| Recarga de página        | Los favoritos se mantienen al refrescar el navegador           |
| Opción de limpiar        | Botón para eliminar todos los favoritos                        |

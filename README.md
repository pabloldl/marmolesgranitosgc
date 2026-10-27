# García Chaves / Materia y forma

Web local de Mármoles y Granitos Hnos. García Chaves S. L. HTML5, CSS3 y JavaScript vanilla, sin compilación ni dependencias de ejecución. Abrir `index.html` con Live Server. No se ha realizado despliegue ni modificado otros proyectos.

## Dirección de diseño

Portada con composición geométrica: nombre en un plano independiente, monolito fotográfico y pieza de contacto en cobre. Presentación tipográfica de actividad, estudio mineral con escalas distintas, líneas de consulta, ficha de emplazamiento y contacto claro. No se utiliza una galería de obras ni un catálogo de existencias. El símbolo geométrico del favicon es un recurso de interfaz, no un logotipo oficial.

Se revisó el HTML de los proyectos abiertos `taberna-el-algarrobo`, `pasteleria-paqui` y `bar-majaceite` para diferenciar la composición; no se realizó una comparación visual en navegador de esos proyectos.

## Investigación y límites del contenido

Consulta: 27 de octubre de 2026.

- [Páginas Amarillas](https://www.paginasamarillas.es/f/el-bosque/marmoles-y-granitos-hnos-garcia-chaves-s-l_235394509_000000001.html): denominación comercial, actividad de mármoles y granitos, 956 716 402 y Polígono Industrial Huerto Blanquillo, 3, El Bosque.
- [Informa: denominación solicitada](https://www.informa.es/directorio-empresas/Empresa_MARMOLES-GRANITOS-HNOS-GARCIA-CHAVES.html): actividad vinculada a fabricación y comercialización de piedra. No se convierte el objeto social en una lista de prestaciones actuales.
- [Todosbiz](https://www.todosbiz.es/m%C3%A1rmoles-y-granitos-hnos-garc%C3%ADa-chaves-956-71-64-02): teléfono y variante de dirección «Polígono Huerta Blanquillo, 3».

Existen referencias a otra entidad, El Bosque Mármoles S. L., con el mismo teléfono y dirección. No se presume identidad jurídica ni continuidad entre ambas. Se mantiene la denominación solicitada. Conviene que el titular confirme la razón social vigente antes de publicar.

No se localizaron fuentes oficiales de la empresa, fotografías propias autorizadas, obras documentadas, variedades comerciales, acabados, marcas, stock, horarios ni perfiles sociales inequívocos. Se omiten esas afirmaciones, las aplicaciones específicas y los servicios no confirmados. Los pasos de consulta son orientaciones al visitante, no prestaciones prometidas.

## Imágenes y licencias

Ambas fotografías son ilustrativas y ajenas a la empresa; se indica en la página, textos alternativos y créditos. No representan trabajos ni inventario.

| Archivo | Autor y procedencia | Archivo local |
| --- | --- | --- |
| `img/marmol.jpg` | [Aleksandar Pasaric / Pexels, 1323712](https://www.pexels.com/photo/image-of-a-marble-surface-1323712/) | JPEG, 1600 × 1067, 49.272 bytes |
| `img/granito.jpg` | [Engin Akyurt / Pexels, 11499001](https://www.pexels.com/photo/close-up-of-the-texture-of-granite-11499001/) | JPEG, 1400 × 1050, 448.586 bytes |

[Licencia Pexels](https://www.pexels.com/license/), consultada en la fecha anterior: uso comercial gratuito y modificación permitidos; no atribuir respaldo ni revender imágenes sin alterar. Descarga desde `images.pexels.com`, a tamaños adecuados y con compresión de su CDN. Formato real y dimensiones comprobados mediante System.Drawing; decodificación adicional en navegador.

Tipografías locales: Barlow (Jeremy Tribby) y Manrope (Mikhail Sharanda), distribuidas bajo SIL Open Font License 1.1. Fuentes: [Barlow](https://github.com/google/fonts/tree/main/ofl/barlow) y [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope). Las licencias acompañan a los archivos en `css/fonts/`. No se realizan peticiones externas de fuentes ni imágenes.

## Funcionalidad y accesibilidad

Navegación de anclas, menú móvil con Escape y `aria-expanded`, llamadas `tel:`, Google Maps con consulta de nombre y dirección, copia mediante Clipboard API y campo seleccionable si se deniega. Sin JavaScript permanecen visibles el contenido y los enlaces de navegación. Fotografías sin animaciones de ocultación, foco visible, salto al contenido y respeto de `prefers-reduced-motion`.

SEO: título, descripción, Open Graph y LocalBusiness con datos de contacto confirmados. Al publicar con un dominio real, establecer URL canónica y URL absoluta de `og:image`; se omiten dominios ficticios en esta entrega local.

## Comprobaciones

Validación de sintaxis con `node --check js/script.js`. La auditoría de navegador de esta entrega utiliza Playwright existente en el equipo y Chrome, sin añadir dependencias al proyecto. Pruebas completadas a 375, 768, 1440 y 1920 px: sin desbordamiento horizontal, fotografías decodificadas y anclas válidas. Revisión visual de capturas completas de escritorio y móvil. Menú móvil, cierre con Escape y al navegar, copia real al portapapeles, alternativa con permiso denegado, movimiento reducido y navegación sin JavaScript comprobados. Sin errores de JavaScript ni respuestas HTTP fallidas. Los enlaces de llamada y mapa se revisan por su destino; no se realizan llamadas telefónicas ni se verifica una ruta física.

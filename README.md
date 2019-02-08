## Nombres Cifrados

### Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.


### Diseño de página
En el diseño de esta app web solo se muestra una pantalla  la cual esta conformada por el titúlo de la app, después una breve explicación de el objetivo de la app y una explicación de el cifrado Cesar. Lo siguiente que se muestra es un recuadro en el que el usuario introduce el número de posiciones y debajo esta el otro recuadro donde introduce el o los nombres que desea cifrar/descrifrar bajo este recuadro estan los botones cifrar y descrifrar. Y por último tenemos un cuadro de texto en el cual te arroja el resultado dependiendo el  botón que hayas oprimido, a un costado de este existe otro botón llamado reset que sirve para limpiar el recuadro de el número de desplazamiento y el recuadro de el o los nombres.
Es una página dinámica ya que el usuario elige el número de posiciones que desea que se desplace las letras.


### Información de programa
Primero recibe dos datos uno tipo número y el otro texto, los cuales son usados en una
función si la o las palabras estan en minúsculas se convierten a mayúsculas, despúes se crea  un arreglo  al cual se le indica que separe cada palabra por un espacio ya hecho esto, comienza a tomar cada palabra y en cada palabra comienza a convertir cada caracter en ascii, despúes hace el cifrado o descifrado segun sea el caso, despúes la convierte de nuevo al abecedario las guarda y la regresa ya cifrada/descifrada. Por último junta todo el arreglo y quita los espacios de el inicio y final.


### Usuarios
Esta aplicación web esta pensada para todos aquellos que quieran
pasar el rato cifrando su nombre o el de sus amigos descubriendo y
compartiendo el como se escribiría su nombre en cifrado Cesar,  también  puede ser útil  
en aquellas ocasiones que estamos platicandole a nuestr@ mejor amig@ sobre nuestro
crush y no queremos que nadie sepa quien es esa persona.

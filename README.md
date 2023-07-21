# node-server
¿Qué sucedio al usar async y await?
Al usar async y await, el flujo del programa se vuelve más sincrónico y más fácil de leer, ya que permite escribir código asíncrono de manera similar a código síncrono. Cuando una función está marcada con la palabra clave async, automáticamente devuelve una promesa, lo que permite usar await dentro de ella para esperar que las promesas se resuelvan. Al usar await, la ejecución del programa se detiene en esa línea hasta que la promesa se resuelva, lo que facilita la escritura de código secuencial.

¿Qué sucedio al usar el método then()?
Al usar el método then(), el flujo del programa sigue siendo más parecido al enfoque tradicional de las promesas, donde las operaciones asíncronas se encadenan mediante then(). Si bien este enfoque también es funcional, puede resultar menos legible y más propenso a anidaciones excesivas en comparación con el uso de async y await.

¿Qué diferencias encontraste entre async, await y el método then()?
Diferencias entre async, await y el método then():

async y await:
Proporcionan una forma más declarativa y sincrónica de manejar promesas, lo que mejora la legibilidad del código.
Al utilizar await, la ejecución del programa se detiene hasta que la promesa se resuelva o se rechace.
Permite capturar errores con un bloque try/catch de manera similar a las excepciones en código síncrono.

Método then():
Proporciona una forma más tradicional de manejar promesas, encadenando funciones de retorno (then()) y funciones de error (catch()).
Puede llevar a una estructura más anidada y menos legible si hay varias operaciones asíncronas encadenadas.
No es posible utilizar un bloque try/catch para capturar errores, y se deben manejar mediante la función de error en la cadena de then().
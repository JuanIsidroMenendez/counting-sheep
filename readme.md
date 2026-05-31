# Reversing Words - JavaScript

Ejercicio de JavaScript, cuyo objeto es crear una función que reciba un array y emita un mensaje dependiendo de la cantidad de ovejas (true) y lobos (false) que haya. Se utilizan condicionales y métodos de array, así como testeo con Vitest.

# Criterios

Con cada condición, se emitirá un mensaje específico.

1. Sólo ovejas.
2. Solo lobos.
3. Más ovejas que lobos.
4. Más lobos que ovejas.
5. Input no array (error).
6. Array con valores no boleanos (error).

Estos criterios son los utilizados para el desarrollo de la función y los evaluados en los test.


# Algoritmo

1. Recibir el parámetro `animals`.
2. Validar que el parámetro recibido en un `array`. En caso contratio, se emite un error.
3. Validar que todos los elementos son boleanos con `.every()`. En caso contrario, se emite error.
4. Contar las ovejas.
5. Contar los lobos.
6. Evaluar las condiciones en orden.

# Test con Vitest

<img width="585" height="310" alt="Sheep test" src="https://github.com/user-attachments/assets/7b9534cb-be9c-4ad6-9ebd-d1543a54bbbf" />





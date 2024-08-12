<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Cuáles son los tipos de explotación en los sistemas productivos avícolas:',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Explotación intensiva', esCorrecta: false },
            { id: 'b', texto: 'Explotación semi intensiva', esCorrecta: false },
            {
              id: 'c',
              texto: 'Explotación extensiva o traspatio',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Todas la anteriores', esCorrecta: true },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente ....',
        },
        {
          id: 2,
          texto:
            'Se lanzan dos proyectiles desde el suelo con la misma velocidad inicial, pero uno se lanza horizontalmente y el otro se lanza formando un ángulo de 45 grados con la horizontal. Considerando la resistencia del aire despreciable, ¿cuáles de las siguientes afirmaciones son verdaderas?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos proyectiles alcanzarán la misma altura máxima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proyectil lanzado horizontalmente recorrerá una distancia horizontal mayor que el proyectil lanzado a 45 grados',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La velocidad horizontal del proyectil lanzado a 45 grados será mayor que la velocidad horizontal del proyectil lanzado horizontalmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La velocidad total del proyectil lanzado a 45 grados en el punto más alto de su trayectoria será la misma que la velocidad horizontal del proyectil lanzado horizontalmente en cualquier punto de su trayectoria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Perfecto! Has seleccionado la respuesta correcta.',
          mensaje_incorrecto: 'Esa no es la respuesta correcta. ¡Ánimo!',
        },
        {
          id: 3,
          texto: 'Texto de la tercera pregunta 3',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Esa es la respuesta correcta.',
          mensaje_incorrecto: 'Respuesta incorrecta. ¡Inténtalo de nuevo!',
        },
        {
          id: 4,
          texto: 'Texto de la cuarta pregunta 4',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: true },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 5,
          texto: 'Texto de la quinta pregunta 5',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

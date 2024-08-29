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
      tema: 'Legislación laboral y gestión del talento humano.',
      titulo: 'Cuestionario',
      introduccion:
        'Medir la comprensión de los conceptos clave sobre las normativas y prácticas esenciales en los procesos de contratación, inducción, capacitación, evaluación del desempeño y terminación de contratos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el documento que regula la situación laboral del talento humano en Colombia? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Código Civil. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Código Sustantivo del Trabajo. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Código Penal. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Código Administrativo. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad es responsable de la vinculación de los futuros colaboradores en una organización? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Departamento de finanzas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Área de talento humano. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gerencia general. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Departamento de ventas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes NO es un elemento del contrato de trabajo según el CST? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Identificación y domicilio de las partes. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Labor o trabajo a ejecutar. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estado civil del trabajador. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Salario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Según el CST, ¿qué tipo de contrato debe constar siempre por escrito y su duración no puede ser superior a tres años? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Contrato a término indefinido. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contrato de aprendizaje. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contrato a término fijo. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Contrato por obra o labor determinada. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de inducción proporciona información básica sobre la filosofía misional de la organización? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Inducción general. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Inducción específica. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inducción técnica. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inducción operativa. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el objetivo principal de la evaluación del desempeño? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el salario de los empleados. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proveer retroalimentación para mejorar los procesos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar el horario de trabajo. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planificar actividades recreativas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            "¿Qué significa 'tercerización' en el contexto del documento? ",
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Contratar personal interno. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegar funciones a organizaciones o personas externas. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contratar empleados temporales. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Despedir empleados. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es una de las ventajas de capacitar a los empleados? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce el número de horas trabajadas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta el sentido de pertenencia y compromiso. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuye la necesidad de supervisión. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta los costos operativos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué aspecto NO se menciona como parte del contenido del contrato de trabajo en el CST? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Obligaciones. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prohibiciones. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seguro médico. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Período de prueba. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes NO es una causa justa para la terminación del contrato según el Artículo 62 del CST? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Robo por parte del trabajador. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inasistencia injustificada. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Necesidades económicas de la empresa. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incumplimiento de las cláusulas del contrato. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

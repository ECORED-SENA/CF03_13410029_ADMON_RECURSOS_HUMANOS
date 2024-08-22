export default {
  global: {
    componenteFormativo: 'Proceso de contratación del talento humano',
    descripcionCurso:
      'Este componente formativo tiene como finalidad, definir los procedimientos, orientaciones y actividades contractuales y precontractuales basándose en normas, decretos o leyes que rigen el modelo de contratación del país, debido a que estos procesos son de carácter legal y normativo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contrato de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contenido del contrato',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases de contratos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Inducción, capacitación y evaluación del desempeño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Inducción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Capacitación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Adiestramiento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación del desempeñ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Terminación y liquidación del contrato',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Liquidación del contrato de trabajo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Indemnización',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Programas de revinculación laboral',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Contrato de trabajo ',
      referencia:
        'Economía Desde Casa. (2021). <em>Tipos de contrato de trabajo</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QgyfQ65FD-E',
    },
    {
      tema: 'Contrato de trabajo',
      referencia:
        'Actualícese Video. (2020). <em>Contrato de trabajo: ¿cuáles son válidos en Colombia?</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Q1-uBqsqlNo',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación',
      significado:
        'proceso de enseñanza y aprendizaje que busca mejorar las habilidades y conocimientos de los empleados para un mejor desempeño en sus funciones. ',
    },
    {
      termino: 'Contrato',
      significado:
        'acuerdo legal entre dos partes donde una persona se compromete a prestar un servicio personal a otra persona o entidad, bajo la dependencia y subordinación de la segunda, a cambio de una remuneración. ',
    },
    {
      termino: 'Desempeño',
      significado:
        'grado de cumplimiento y eficacia con que un empleado realiza sus tareas y responsabilidades asignadas en el trabajo. ',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso de revisión y análisis del desempeño de los empleados con el fin de mejorar su rendimiento, identificar necesidades de capacitación y tomar decisiones sobre ascensos y salarios. ',
    },
    {
      termino: 'Inducción',
      significado:
        'proceso de integración de un nuevo empleado a la organización, proporcionando información sobre la empresa y sus políticas para que se desempeñe adecuadamente. ',
    },
    {
      termino: 'Trabajo',
      significado:
        'actividad que realiza una persona en favor de otra a cambio de una retribución económica. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Bogotá. (s.f.). <em>Decreto 2663 de 1950 Nivel Nacional</em>. ',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=33104',
    },
    {
      referencia:
        'Ministerio del Trabajo. (s.f.). <em>Proceso de contratación</em>.',
      link:
        'https://www.mintrabajo.gov.co/web/empleosinfronteras/proceso-de-contratacion#:~:text=El%20contrato%20de%20trabajo%20se,ser%C3%A1%20reconocido%20con%20una%20remuneraci%C3%B3n',
    },
    {
      referencia:
        'Secretaría del Senado. (s.f.). <em>Código Sustantivo del Trabajo</em>.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Orlando Vidal Perdomo',
          cargo: 'Experto temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Experto temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaludora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

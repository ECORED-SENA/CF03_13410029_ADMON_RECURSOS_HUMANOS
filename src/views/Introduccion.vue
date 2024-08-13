<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-up") El proceso de contratación del talento humano debe respetar la jurisprudencia constituida en Colombia. Las organizaciones, sean de carácter público o privado, nacionales o extranjeras, no pueden apartarse de los preceptos contemplados en la ley. Deberán ceñirse por lo reglamentado en la norma en todo lo que haga referencia a lo laboral.

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .p-3.mb-3(style="background-color:#EADFFE;border-radius:10px;")
          p.mb-0 Por lo tanto, este proceso es el inicio de la labor que realiza el área del talento humano en las organizaciones, definida como una de las funciones específicas, es el área responsable de la vinculación de los futuros colaboradores o clientes internos.
        .p-3.mb-3(style="background-color:#4C317D;border-radius:10px;")
          p.mb-0.text-white Los procesos anteriores a la contratación son el preámbulo de las funciones generales y estas mismas, como se observó anteriormente, pueden ser delegadas a otras organizaciones o personas expertas (tercerización).
        .p-3(style="border-radius:10px;border:2px #3CEAD6 dashed;")
          p.mb-0 Partiendo que se ha finalizado el proceso de selección y que se cuenta con el candidato a colaborador o cliente interno, se realizará la vinculación legal de acuerdo con la normativa vigente en el Código Sustantivo del Trabajo (CST), temática que se estudiará en el presente componente formativo.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure.m-auto.col-lg-12
          img(src="@/assets/curso/intro1.svg")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

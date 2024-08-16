<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Terminación y liquidación del contrato
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Después de haber culminado las etapas de selección y contratación, en algunos casos dispendiosas, agotadoras y fatigantes, tanto para las organizaciones como para los colaboradores o clientes internos y llevar estos últimos un tiempo laborando, en algunos casos realizando transferencia de conocimientos y estar vinculado mediante una de las modalidades descritas de contratación vigentes en la ley de Colombia, estos mismos contienen unas cláusulas para finalizarlos. 
        p Existen fundamentalmente dos maneras que, de acuerdo con la legislación laboral colombiana, permiten dar por terminado el contrato de trabajo; estas son: 
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-9.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/1.png")
    
    .row.mt-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/2.png")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Justa causa")
            p En el Código Sustantivo del Trabajo, artículo 62, se detallan todas las causales por las cuales se pueden dar por terminado el contrato de trabajo, las cuales se aconseja revisar. El mismo artículo hace referencia, para que tanto el patrón como el trabajador, dispongan o si es el caso, invoquen la(s) cláusulas que den por terminado en la vía jurídica el contrato por las partes intervinientes, Estos mismos literales del artículo deben ser plasmados en las cláusulas del contrato que se acuerde por las partes que le dan vida jurídica a ese documento.
          .row.col-xl-11.m-auto(titulo="Sin justa causa")
            p “El que se haya pactado una labor, oficio, mediante un documento (Contrato de trabajo) y en el mismo se hayan establecido las cláusulas correspondientes (deberes, derechos, prohibiciones), es el que permite el término de estricto cumplimiento entre las partes, suele pasar que alguna de esas partes NO cumple lo que se conoce como terminación de manera UNILATERAL, para esta situación, cuando el patrono da por terminado el contrato laboral, debe cumplir con lo estipulado en la legislación laboral, reconociendo una indemnización y liquidación”. (Código Sustantivo del Trabajo)
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1  Liquidación del contrato de trabajo
    
    .row
      .col-lg-9.mb-4.mb-md-0.col-md-6(data-aos="fade-right" style="place-self:center;")
        p Cuando se realiza la terminación de un contrato de trabajo por cualquier motivo, es deber de las organizaciones en la dependencia responsable (Talento Humano), realizar la respectiva liquidación del contrato en los tiempos y condiciones establecidos por la legislación laboral de Colombia, so pena de recibir por parte del Ministerio de Trabajo las correspondientes sanciones y multas. En el caso de las entidades públicas, se verían por parte del ministerio público (Procuraduría General de la Nación) sancionadas como falta grave, con suspensión de la actividad pública.
      .col-lg-3.col-md-6(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-9.col-lg-12
          img(src="@/assets/curso/tema3/3.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2  Indemnización
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p El artículo 64 del Código Sustantivo del Trabajo, como referente de la legislación laboral en Colombia, ha establecido los parámetros o las condiciones con las cuales procede a reconocerse o repararse el daño al terminar unilateralmente lo pactado, cuando se rompe el vínculo contractual, debiendo pagar el equivalente a 30 días por año o fracción.
      .col-lg-5(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-9.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/4.png")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3  Programas de revinculación laboral
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Cuando un colaborador es desvinculado de la organización por situaciones de la misma, la ley contempla programas que se le deben brindar a efecto de ser reincorporado laboralmente.
        p Actualmente, instancias gubernamentales han sido creadas para apoyar este proceso a través del desarrollo de programas de Servicio Público de Empleo, que ofrecen servicios como:
      .col-lg-5(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-9.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/5.png")
    
    .row.mt-5
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.text-center.text-white.p-4(style="background-color:#4C317D;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema3/6.svg" style="max-width:100px;display:inline;")
          h5.mt-4 Capacitación al desempleado.
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.text-center.text-white.p-4(style="background-color:#4C317D;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema3/7.svg" style="max-width:100px;display:inline;")
          h5.mt-4 Beneficios económicos mientras se encuentra en cese laboral (pago hasta por seis meses de la seguridad social (salud, pensión) y subsidio familiar).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.text-center.text-white.p-4(style="background-color:#4C317D;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema3/8.svg" style="max-width:100px;display:inline;")
          h5.mt-4 Asesoría en busca de empleo (ofertas laborales, intermediación).
      .col-lg.col-md-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.text-center.text-white.p-4(style="background-color:#4C317D;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema3/9.svg" style="max-width:100px;display:inline;")
          h5.mt-4 Emprendimiento empresarial.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>

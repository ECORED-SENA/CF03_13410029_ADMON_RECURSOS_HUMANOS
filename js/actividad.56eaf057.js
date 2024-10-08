(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0b0d":function(e,t,a){"use strict";a("4cb3")},"41a8":function(e,t,a){e.exports=a.p+"img/pregunta_4.460db031.png"},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.cuestionario.introduccion)+" ")])])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],n=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4"},[t("b",[e._v(e._s(e.pregunta.texto))])]),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-5"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col"},[e._v(" "+e._s(a.texto)+" ")])])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),c=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("5c20"),a("2877")),p=Object(l["a"])(u,n,c,!1,null,"4a5e71aa",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Reiniciar")])]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},C=[],g={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},v=g,x=(a("c2dc"),Object(l["a"])(v,b,C,!1,null,"7a0121ad",null)),_=x.exports,h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia una buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},j=[],f={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},A=f,S=(a("4ea7"),Object(l["a"])(A,h,j,!1,null,"2c747cc8",null)),y=S.exports,R={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:_,ActividadResultados:y},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},I=R,L=(a("0b0d"),Object(l["a"])(I,o,i,!1,null,"1bb53ccc",null)),w=L.exports,D={name:"ActividadDidactica",components:{Actividad:w},data:()=>({cuestionario:{tema:"Legislación laboral y gestión del talento humano.",titulo:"Cuestionario",introduccion:"Medir la comprensión de los conceptos clave sobre las normativas y prácticas esenciales en los procesos de contratación, inducción, capacitación, evaluación del desempeño y terminación de contratos.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Cuál es el documento que regula la situación laboral del talento humano en Colombia? ",imagen:a("4b5d"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Código Civil. ",esCorrecta:!1},{id:"b",texto:"Código Sustantivo del Trabajo. ",esCorrecta:!0},{id:"c",texto:"Código Penal. ",esCorrecta:!1},{id:"d",texto:"Código Administrativo. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Qué entidad es responsable de la vinculación de los futuros colaboradores en una organización? ",imagen:a("9738"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Departamento de finanzas. ",esCorrecta:!1},{id:"b",texto:"Área de talento humano. ",esCorrecta:!0},{id:"c",texto:"Gerencia general. ",esCorrecta:!1},{id:"d",texto:"Departamento de ventas. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Cuál de los siguientes NO es un elemento del contrato de trabajo según el CST? ",imagen:a("5173"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Identificación y domicilio de las partes. ",esCorrecta:!1},{id:"b",texto:"Labor o trabajo a ejecutar. ",esCorrecta:!1},{id:"c",texto:"Estado civil del trabajador. ",esCorrecta:!0},{id:"d",texto:"Salario.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"Según el CST, ¿qué tipo de contrato debe constar siempre por escrito y su duración no puede ser superior a tres años? ",imagen:a("41a8"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Contrato a término indefinido. ",esCorrecta:!1},{id:"b",texto:"Contrato de aprendizaje. ",esCorrecta:!1},{id:"c",texto:"Contrato a término fijo. ",esCorrecta:!0},{id:"d",texto:"Contrato por obra o labor determinada. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué tipo de inducción proporciona información básica sobre la filosofía misional de la organización? ",imagen:a("4b5d"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Inducción general. ",esCorrecta:!0},{id:"b",texto:"Inducción específica. ",esCorrecta:!1},{id:"c",texto:"Inducción técnica. ",esCorrecta:!1},{id:"d",texto:"Inducción operativa. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál es el objetivo principal de la evaluación del desempeño? ",imagen:a("9738"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Aumentar el salario de los empleados. ",esCorrecta:!1},{id:"b",texto:"Proveer retroalimentación para mejorar los procesos. ",esCorrecta:!0},{id:"c",texto:"Determinar el horario de trabajo. ",esCorrecta:!1},{id:"d",texto:"Planificar actividades recreativas. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué significa 'tercerización' en el contexto del documento? ",imagen:a("5173"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Contratar personal interno. ",esCorrecta:!1},{id:"b",texto:"Delegar funciones a organizaciones o personas externas. ",esCorrecta:!0},{id:"c",texto:"Contratar empleados temporales. ",esCorrecta:!1},{id:"d",texto:"Despedir empleados. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Cuál es una de las ventajas de capacitar a los empleados? ",imagen:a("41a8"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Reduce el número de horas trabajadas. ",esCorrecta:!1},{id:"b",texto:"Aumenta el sentido de pertenencia y compromiso. ",esCorrecta:!0},{id:"c",texto:"Disminuye la necesidad de supervisión. ",esCorrecta:!1},{id:"d",texto:"Aumenta los costos operativos. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Qué aspecto NO se menciona como parte del contenido del contrato de trabajo en el CST? ",imagen:a("4b5d"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Obligaciones. ",esCorrecta:!1},{id:"b",texto:"Prohibiciones. ",esCorrecta:!1},{id:"c",texto:"Seguro médico. ",esCorrecta:!0},{id:"d",texto:"Período de prueba. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Cuál de las siguientes NO es una causa justa para la terminación del contrato según el Artículo 62 del CST? ",imagen:a("9738"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Robo por parte del trabajador. ",esCorrecta:!1},{id:"b",texto:"Inasistencia injustificada. ",esCorrecta:!1},{id:"c",texto:"Necesidades económicas de la empresa. ",esCorrecta:!0},{id:"d",texto:"Incumplimiento de las cláusulas del contrato. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},M=D,O=Object(l["a"])(M,s,r,!1,null,null,null);t["default"]=O.exports},"4b5d":function(e,t,a){e.exports=a.p+"img/pregunta_1.183a2384.png"},"4cb3":function(e,t,a){},"4ea7":function(e,t,a){"use strict";a("b25d")},5173:function(e,t,a){e.exports=a.p+"img/pregunta_3.5ec1b1f9.png"},"5c20":function(e,t,a){"use strict";a("8199")},8199:function(e,t,a){},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},9738:function(e,t,a){e.exports=a.p+"img/pregunta_2.81bd826c.png"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},b25d:function(e,t,a){},c2dc:function(e,t,a){"use strict";a("f4e0")},f4e0:function(e,t,a){}}]);
//# sourceMappingURL=actividad.56eaf057.js.map
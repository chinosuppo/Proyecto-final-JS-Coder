$(document).ready(function(){
    
    //articulos
    if(window.location.href.indexOf("index") > -1){

        let articulos = [
            {
                titulo: "Ovnipuerto, en Cachi Salta",
                fecha: "Publicado el: " + moment().format("03-12-2022","DD MM YYYY"),
                contenido: "Un ciudadano Suizo llegó a Cachi, Salta Argentina y dicen que tuvo un encuentro con extraterrestres y les hizo este ovnipuerto en la ciudad salteña de Cachi. La estrella mayor tiene 30 puntas y la del centro sólo 12 puntas."
            },
            {
                titulo: "El Concejo Deliberante de Cachi prohibió la actividad minera",
                fecha: "Publicado el: " + moment().format("02-12-2022","DD MM YYYY"),
                contenido: "Nieves Mendoza, concejal de Cachi, expresó a Nuevo Diario que empezaron a trabajar en el tema desde la publicación de un edicto judicial donde se indicaba que la empresa Yacones SRL había encontrado un yacimiento de oro y cobre en la localidad, lo que generó preocupación en la población. Ante ello, se realizó una sesión extraordinaria en el Concejo Deliberante y solicitaron información a la Jueza de Minas de la Provincia, María Victoria Mosmann, sobre el número de catastro del yacimiento y cuál iba a ser el proceso de exploración y explotación.“Fue contestado días después que la mina estaba ubicada en Molinos, no en Cachi, y que la empresa Yacones había retirado el trabajo que iba a realizar ahí. Ante esto, lo mismo sentíamos que teníamos que hacer algo, por la preocupación de los vecinos. Creemos que nuestra actividad va en contra de la minera”, consideró. Mendoza y el presidente del Concejo Deliberante, Jorge Moya, fueron los encargados  de realizar la ordenanza que prohíbe la actividad minera en Cachi, la cual fue aprobada en la sesión de ayer. Dentro de los articulados, se incluye la actividad del litio, metalífera, a cielo abierto, extractiva, lixiviación, entre otros; la preservación del recurso del agua y la decisión de no adherir al Código Minero. “Determinamos que nuestro municipio tiene que ser libre y limpio de minería, y sustentable”, sostuvo. Mendoza comentó también que en un encuentro de concejales del Valle Calchaquí surgió el tema de la preocupación sobre la situación ambiental y hubo un compromiso de concejales de otras localidades de replicar la ordenanza una vez que sea aprobada."
            },
            {
                titulo: "Desde degustar un buen vino hasta adentrarse en el mundo OVNI",
                fecha: "Publicado el: " + moment().format("17-11-2022","DD MM YYYY"),
                contenido: "La provincia de Salta tiene a Cachi como una de sus hijas dilectas. Es que este pueblo Calchaquí parece detenido en el tiempo y su visita merece más que un día como suelen ser las excursiones que salen desde Salta capital. Dentro de la ruta del vino que ya forma parte de la geografía salteña Cachi  fue declarado por el Ministerio de Turismo de la Nación como Pueblo Auténtico. Ubicado a 2280 metros sobre el nivel del mar, cuya cumbre es el nevado de Cachi que tiene nieve todo el año y provee de agua a la ciudad y a los viñedos que se sienten como anillo al dedo en el varietal malbec.  Además, el turismo de Aventura y el Rural Comunitario han crecido notablemente. El predio Miraluna cuenta con 13.500 plantas de uva de malbec y 2.500 de merlot, además es el antecedente de ser la primera bodega de la ruta del vino salteño. Incluso, además de las conocidas degustaciones, tiene cabañas con pileta para quedarse a disfrutar unos días. El secreto de la calidad de estos vinos hay que buscarla en el penetrante sol de esta zona del país y la muy escasa cantidad de agua que cae (140 milímetros anuales). Cachi también cuenta con un Ovnipuerto. Es un espacio construido por el suizo Werner Jaisli con rocas blancas dispuesta geométricamente. Se encuentra en una zona ubicada en el acceso a las serranías del norte de Cachi. A partir de esa orden Jaisli comenzó a diseñar lo que en aquella época se conoció como Ovnipuerto, un lugar donde incluso se podría tomar contacto con seres de otros interplanetarios. La historia revolucionó a los buscadores y seguidores del mundo ovni y, desde ese momento, el lugar fue otro punto de referencia para los turistas. El ovnipuerto de Cachi que Werner denominó “La esperanza” está a unos cuatro kilómetros del pueblo, y es una de las atracciones turísticas."
            },
            {
                titulo: "Descubren tierras llenas de oro y cobre en Cachi: estarían por explotarlas",
                fecha: "Publicado el: " + moment().format("24-10-2022","DD MMMM YYYY"),
                contenido: "En el Boletín Oficial de la Provincia, se publicó hoy una notificación judicial en la que se hace conocer que la sociedad YACONES SRL descubrió un yacimiento diseminado de oro y cobre en el departamento de Cachi. Según informó Fm Profesional, los terrenos afectados son de propiedad de la Sra., Andrea Wayar y la superficie de 2989 hectáreas."
            },
            {
                titulo: "Más de 31 mil turistas extranjeros y nacionales visitaron Salta el finde largo",
                fecha: "Publicado el: " + moment().format("18-04-2022","DD MMMM YYYY"),
                contenido: "La belleza natural, cultural y la calidad de servicios de Salta fueron atractivos fundamentales para que la provincia haya sido uno de los destinos predilectos para los turistas en Semana Santa 2022 dentro de la Argentina. Un 88% de los turistas fueron de origen nacional (10% salteños) y 12% del exterior, principalmente de Uruguay, España, Brasil, Bolivia, Francia, Paraguay, Colombia, Estados Unidos y Chile. El impacto económico generado fue de $474.685.539 con un pernocte de 2,3 noches y un gasto promedio por persona de $ 6.658. Miles de turistas recorrieron los distintos municipios disfrutando las más de 200 actividades planificadas en las siete regiones turísticas. <strong>Cachi (97%)</strong>  Cafayate (97%) Chicoana (93%) Capital (94%) Coronel Moldes (90%) Guachipas (96%) Molinos (85%) Rosario de la Frontera (79%) San Antonio de los Cobres (98%) y San Lorenzo (99%) son algunos de los municipios con más alto nivel de ocupación."
            }
        ]

        articulos.forEach((item, index) => {

            let post = `
                <article class="post">
                <h2>${item.titulo}</h2>
                    <span class="fecha">${item.fecha}</span>
                        <p>
                            ${item.contenido}
                        </p>
                    <a href="#" class="boton-leer">Leer más</a>
                </article>
            `;

            $("#articulos").append(post);    
        });

    }

    // boton ir arriba

    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 300);
        
        return false;
    });
    
    //

    $("#login form").submit(function(){
       let form_nombre = $("#form_nombre").val();
       let form_mail = $("#form_mail").val();
       let form_contrasena = $("#form_contrasena").val();

       localStorage.setItem("form_nombre", form_nombre);
       localStorage.setItem("form_mail", form_mail);
       localStorage.setItem("form_contrasena", form_contrasena);
    });

    let form_nombre = localStorage.getItem("form_nombre");

    if(form_nombre != null && form_nombre != "undefined"){
        let about_parrafo =  $("#about p");

        about_parrafo.html("Bienvenido, " + form_nombre + "<br>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    
    // acordeon con JQuery UI
    if(window.location.href.indexOf("sobreCachi") > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf("horaClima") > -1){

        setInterval(function(){
            let reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000)    
       
    }

    //validacion de formulario
    if(window.location.href.indexOf("contacto") > -1){

        $("form input[name='fecha']").datepicker({
            dateFormat: "dd/mm/yy"
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});
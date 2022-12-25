$(document).ready(function(){
    
    // Slider
    if(window.location.href.indexOf('index.html') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    // Posts (JSON)
    if(window.location.href.indexOf('index.html') > -1){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el' + moment().format("MMMM Do YYYY"),
                content: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                title: 'Prueba de titulo 2',
                date: new Date(),
                content: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                title: 'Prueba de titulo 3',
                date: new Date(),
                content: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                title: 'Prueba de titulo 4',
                date: new Date(),
                content: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            },
            {
                title: 'Prueba de titulo 5',
                date: new Date(),
                content: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'
            }
        ];
        
        posts.forEach((item, index) =>{
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(post);
        });
    }

    // Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        // .attr (atributo, value)
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        // colocar valor en el localStorage
        localStorage.setItem("form_name", form_name);

    });

    // obtener valor del localStorage
    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            // Si le doy a cerrar sesión, limpiar datos del almacenamiento local.
            localStorage.clear();
            // Tras la limpieza de los datos, recargar los inputs para nuevos datos.
            location.reload();
        });
    }

    // Acordeón
    if(window.location.href.indexOf('about') > -1){
        // .accordion : function para acordeon
        $("#acordeon").accordion();
    }   

    // Reloj
    // Condicion de buscar en la ventana de mi web con mi ubi, luego con enlace href encontrar la palabra reloj procede a ejecutar dicha función
    if(window.location.href.indexOf('reloj') > -1){
        // setInterval : colocar intervalo de tiempo
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
        // cantidad de tiempo : 1000 = 1seg    
    }

    // Validación
    if(window.location.href.indexOf('contact') > -1){
        
        // insertar calendario en el input con el nombre date
        $("#form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        $.validate({
            lang : 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});
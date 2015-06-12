(function(){
    $("#boton_envio").click(function() {
 
        var nombre = $(".nombre").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            telefono = $(".telefono").val();
            mensaje = $(".mensaje").val();
 
        if (nombre == "") {
            $(".nombre").focus();
            $(".mensajebox").html("Nombre requerido<br/>");
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();  
             $(".mensajebox").html("Correo requerido<br/>");  
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
             $(".mensajebox").html("Mensaje requerido<br/>");
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&telefono=' + telefono + '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "proceso.php",
                data: datos,
                success: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '100px' }, 200);  
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '100px' }, 200);                 
                }
            });
            return false;
        }
 
    });
})();

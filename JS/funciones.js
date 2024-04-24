function validacion(){
    var rut = document.getElementById("rut").value;
    var nom = document.getElementById("nombre").value;
    var a_paterno = document.getElementById("paterno").value;
    var a_materno = document.getElementById("materno").value;
    var edad = document.getElementById("edad").value;
    var fono = document.getElementById("fono").value
    //validacion rut
    if (String(rut).length >= 9 && String(rut).length <= 10){
        //validacion nombre
        if (String(nom).length >= 3 && String(nom).length <= 20) {
            //validacion a_paterno
            if (String(a_paterno).length >= 3 && String(a_paterno).length <= 20) {
                //validacion a_materno
                if (String(a_materno).length >= 3 && String(a_materno).length <= 20 ) {
                    //validacion edad
                    if (Number(edad) >= 18 && Number(edad) <= 35){
                        //validar el fono
                        if(String(fono).length >= 9 && String(fono).length <= 12){
                            var res = document.getElementById("fono");
                            res.style.border = "1px solid green"
                            document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>" +
                            "formulario completo</div>"
                        }else{
                            var res = document.getElementById("fono");
                            res.style.border = "1px solid red"
                            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                                "El numero de telefono no es valido</div>"
                        }
                    }else{
                        var res = document.getElementById("edad");
                        res.style.border = "1px solid red"
                        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                            "la edad no es valida</div>"
                    }
                }else {
                    var res = document.getElementById("materno");
                    res.style.border = "1px solid red"
                    document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                        "El largo no es el adecuado</div>"
                }
            }else {
                var res = document.getElementById("paterno");
                res.style.border = "1px solid red"
                document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                    "El largo no es el adecuado</div>"
            }
        }else {
            var res = document.getElementById("nombre");
            res.style.border = "1px solid red"
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                "El largo no es el adecuado</div>"
        }
    }else {
        var res = document.getElementById("rut");
        res.style.border = "1px solid red"
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
            "Rut no válido</div>";
    }
}
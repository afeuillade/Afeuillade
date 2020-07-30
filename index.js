var database = firebase.database();

var InformacionPersonal = database.ref ('infopersonal/InformacionPersonal/');
InformacionPersonal.on('value', function(snapshot) {
    var InformacionPersonal1 = snapshot.val()
    cadena=""
    for(var i in InformacionPersonal1){
    var elem=InformacionPersonal1[i]
    cadena+="<li> InformacionPersonal: "+ elem.InformacionPersonal + "<br>"
    cadena+="Nombre: " + elem.cNombre + "-" + elem.cApellido + "<br>"
    cadena+="Edad: " + elem.cEdad + "<br>"
    cadena+="Celular: " + elem.cCelular + "<br>"
    cadena+="Mail: " + elem.cMail + "<br>"
    cadena+="Profesion: " + elem.cProfesion + "<br>"
    cadena+="<button class='elimina' onclick='eliminainformacionpersonal( \""+elem.id+"\" )' firebaseid='"+elem.id+"'> Eliminar </button>"
    cadena+="</li>"
}
$(".AAñadir").html(cadena)
});

var experiencialaboral = database.ref ('infopersonal/experiencialaboral/');
experiencialaboral.on('value', function(snapshot) {
    var experiencialaboral1 = snapshot.val()
    cadena=""
    for(var i in experiencialaboral1){
    var elem=experiencialaboral1[i]
    cadena+="<li> Experiencia laboral: "+ elem.experiencialaboral + "<br>"
    cadena+="Duración: " + elem.cDesde + "-" + elem.cHasta + "<br>"
    cadena+="Funciones: " + elem.cFunciones + "<br>"
    cadena+="<button class='editar' onclick='editarexperiencialaboral(\""+ elem.id +"\","+elem.experiencialaboral+"\" )' firebaseid='"+elem.id+"'> Editar </button>"
    cadena+="<button class='elimina' onclick='eliminaexperiencialaboral( \""+elem.id+"\" )' firebaseid='"+elem.id+"'> Eliminar </button>"
    cadena+="</li>"
}
$(".ARellenar").html(cadena)
});

$(".crearEmpresa").click((ev)=>{
    const clave = database.ref('infopersonal/experiencialaboral/').push().key
    var data={
        experiencialaboral:$(".cEmpresa").val(),
        cEmpresa:$(".cEmpresa").val(),
        cDesde:$(".cDesde").val(),
        cHasta:$(".cHasta").val(),
        cFunciones:$(".cFunciones").val(),
    
        id:clave
    }
        database.ref('infopersonal/experiencialaboral/'+ data.id).set(data);
})

$(".Añadir").click((ev)=>{
    const clave = database.ref('infopersonal/InformacionPersonal/').push().key
    var data={
        InformacionPersonal:$(".InformacionPersonal").val(),
        cNombre:$(".cNombre").val(),
        cApellido:$(".cApellido").val(),
        cEdad:$(".cEdad").val(),
        cCelular:$(".cCelular").val(),
        cMail: $(".cMail").val(),
        cProfesion:$(".cProfesion").val(),
        cFunciones:$(".cFunciones").val(),
    
        id:clave
    }
        database.ref('infopersonal/InformacionPersonal/'+ data.id).set(data);
})

function eliminaexperiencialaboral(id){
    database.ref('infopersonal/experiencialaboral/'+id).remove()
}

function eliminainformacionpersonal(id){
    database.ref('infopersonal/InformacionPersonal/'+id).remove()
}

function editarexperiencialaboral(id,cEmpresa,cDesde,cHasta,cFunciones){
}
$(".editarexperiencialaboral").click ((ev)=>{
})
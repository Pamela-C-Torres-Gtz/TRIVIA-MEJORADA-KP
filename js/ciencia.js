function preguntaCiencia(){

    let resp1 = 0;
    let resp2 = 0;
    let resp3 = 0;

    if(document.querySelector('input[name=respuesta1]:checked')!==null){
        resp1 = Number((document.querySelector)('input[name=respuesta1]:checked').value);
        document.querySelector('input[name=respuesta1]:checked').checked = "";
    }
    if(document.querySelector('input[name=respuesta2]:checked')!==null){
        resp1 = Number((document.querySelector)('input[name=respuesta2]:checked').value);
        document.querySelector(('input[name=respuesta2]:checked').checked = "");
    }
    if(document.querySelector('input[name=respuesta3]:checked')!==null){
        resp1 = Number((document.querySelector)('input[name=respuesta3]:checked').value);
        document.querySelector(('input[name=respuesta3]:checked').checked = "");
}
    let correctas = resp1 + resp2 + resp3;
    document.getElementById("enviado").style.visibility ="visible";
    document.getElementById("correctas").innerHTML = correctas;
    document.getElementById("incorrectas").innerHTML = 3-correctas;
}

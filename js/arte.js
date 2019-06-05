function preguntaArte(){
    let incorrectas = 0;
    let count = 0;
    let resp1 = 0;
    let resp2 = 0;
    let resp3 = 0;

    if(document.querySelector('input[name=respuesta1]:checked')!==null){
        resp1 = (document.querySelector)('input[id=correcta1]:checked').value;
        document.querySelector('input[id=correcta1]:checked').checked = "";
        count++;
    }
    else {
       incorrectas++;
    }
    if(document.querySelector('input[name=respuesta2]:checked')!==null){
        resp1 = (document.querySelector)('input[id=correcta2]:checked').value;
        document.querySelector('input[id=correcta2]:checked').checked = "";
        count++;
    }
    else {
        incorrectas++;
     }
    if(document.querySelector('input[name=respuesta3]:checked')!==null){
        resp1 = (document.querySelector)('input[id=correcta3]:checked').value;
        document.querySelector('input[id=correcta3]:checked').checked = "";
        count++;
    }
    else {
        incorrectas++;
     }


    let correctas = resp1 + resp2 + resp3;
    console.log(count);



    document.getElementById("enviado").style.visibility ="visible";
    document.getElementById("correctas").innerHTML = count;
    document.getElementById("incorrectas").innerHTML = 3-count;
}

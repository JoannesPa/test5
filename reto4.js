const poligono = () =>{
    let tipo = prompt("¿Que poligono es?  1. Triangulo  2. Cuadrado  3. Rectangulo ");
    if (tipo ==1){
        let base = prompt("Escribe la base del triangulo");
        let altura = prompt("Escribe la altura del triangulo");
        let area = base*altura/2;
        document.write(`la area del triangulo es ${area}`+"</br>");
    } else if(tipo ==2){
        let lado = prompt("Escribe el lado del cuadrado");
        let area = lado*lado;
        document.write(`la area del triangulo es ${area}`+"</br>");
    }else if(tipo ==3){
        let ancho = prompt("Escribe el ancho del rectangulo");
        let altura = prompt("Escribe la altura del rectangulo");
        let area = ancho*altura;
        document.write(`la area del triangulo es ${area}`+"</br>");
    }else{
        document.write("sorry no tenemos ese poligono"+"</br>");
    }
}

poligono();
poligono();

const recorrerTexto = (texto,tiempo,cb) => {
    let i = 0;
    let texto = 'Hola que tal mi nombre es Nicolas y tengo 28 años';
    let recorrerTexto = mensaje.split(' ');
    const recorrerTexto =()=>{
        if(i<texto.length){
            console.log(texto[i]);
            i++;
        }else{
            crearInterval(tiempo);
            cb();
        }
    }
    const tiempo = setInterval(recorrerTexto,5000)
}

setTimeout(()=>{
    recorrerTexto("Hola que tal",funcionFinalizada)    
},0);

setTimeout(()=>{
    recorrerTexto("mi nombre es Nicolas",funcionFinalizada)    
},1000);

setTimeout(()=>{
    recorrerTexto("y tengo 28 años",funcionFinalizada)    
},2000);

const funcionFinalizada =()=> console.log ("Proceso Finalizado")




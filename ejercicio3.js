const horaminutosegundo=x=>{
    var resul="";
    
    resul+="Valor dato: "+x+"\n";
    resul+="Horas: "+x/3600+"H \n";
    resul+="Minutos: "+x/60+"m \n";
    resul+="Segundos: "+x+"s \n";
    return resul;
}
console.log(horaminutosegundo(4800));
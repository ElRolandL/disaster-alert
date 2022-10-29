let indicepreguntas=0
cargarpregunta(indicepreguntas)
let puntaje=0;

function cargarpregunta(index)
{
   objetopregunta= basedepreguntas[index]
   opciones=[...objetopregunta.distractores]
   opciones. push(objetopregunta.respuesta)
   for(let i=0; i<4; i++)
   {
    opciones.sort(()=>Math.random()-0.5);
   }
  
   document.getElementById("pregunta").innerHTML = objetopregunta.pregunta
   if(objetopregunta.imagen)
   {
    document.getElementById("imagen").src = objetopregunta.imagen
    document.getElementById("imagen").style.display = " ";
   }
   else
   {
    document.getElementById("imagen").style.display = "none";
   }
   if (objetopregunta.ayuda) {
    document.getElementById("ayuda").style.display = " ";
  } else {
    document.getElementById("ayuda").style.display = "none";
  }
   document.getElementById("opcion1").innerHTML = opciones[0]
   document.getElementById("opcion2").innerHTML = opciones[1]
   document.getElementById("opcion3").innerHTML = opciones[2]
   document.getElementById("opcion4").innerHTML = opciones[3]
}

async function selecionaropcion(index)
{
  let validezrespuesta=opciones[index]==objetopregunta.respuesta

  if(validezrespuesta)
  {
    await Swal.fire
    ({

      title:"Respuesta correcta",
      text:"La respuesta ha sido correcta",
      icon:"success",
     });

     puntaje++
  }
  
  else
  {
    await Swal.fire
    ({
      title:"Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetopregunta.respuesta}`,
      icon:"error",
        
    });

  }
  
  indicepreguntas++;
  if(indicepreguntas>=basedepreguntas.length)
  {
    
    await Swal.fire
    ({
      title:"Juego terminado",
      html: `Tu puntaje fue de: ${puntaje}/${basedepreguntas.length}`,
        
    });
    indicepreguntas=0;
    puntaje=0;
  }
  cargarpregunta(indicepreguntas);
}

function ayuda()
{
  swal.fire
  ({
    title:"ayuda",
    text: objetopregunta.ayuda,
    imageUrl:objetopregunta.ayudaimg,
    imageHeight:300,

  });


}
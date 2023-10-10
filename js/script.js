let NombreCompleto;
let edad;
let genero;
let AñoNacimiento, AñoActual;
let ViveNortePais;

let TieneNueveSemanas;

NombreCompleto=prompt('ingrese su nombre completo');
AñoNacimiento=prompt('ingrese su año de nacimiento');
AñoActual=prompt('ngrese el año actual');
genero=prompt('ingrese su genero respuesta F o M')
ViveNortePais=prompt('vive norte del pais? respuesta: S o N')
if(NombreCompleto!= '' && isNaN(AñoNacimiento)&& genero !==''&& ViveNortePais!=='')
{
    edad=AñoActual-AñoNacimiento

    if(edad<18){
        alert('lo siento aun no puedes vacunarte')
    }else{
        if(ViveNortePais.toLocaleUpperCase()==='S')
        {
            if(genero.toUpperCase()==='F')
            embarazada=prompt('estas embarazada?: respuesta S o N')
            if(embarazada.toUpperCase()=== 'S'){
                TieneNueveSemanas = prompt('tiene mas de 9 semanas en gestacion? S o N')
                if(TieneNueveSemanas.toUpperCase()==='S'){
                    alert('no se puede vacunar')
                }else{
                    ('puede vacunarse')
                }
            }
        }
    }
    console.log(nombre+edad+genero+ViveNortePais)
}else{
    alert('te faltaron campos')
}
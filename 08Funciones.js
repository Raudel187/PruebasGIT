//funciones bloques de codigo con un fin especifico
function saludar(parametro1){
    console.log(`hola ${parametro1}`);
}

saludar("raudel");
//pasar un objeto como parametro a una funcion
let descripcion={ nombre:"Raudel", apellido:"Luna"};
function describir(objeto){
    console.log(`mi nombre es ${objeto.nombre} ${objeto.apellido}`);
}
describir(descripcion)
//parametros indefinidos () va vacio y genera errores cuando son variables ordinarias y genera error cuan son objetos en los parametros
//parametros opcionales (parametro=1)
//pasasr x parametros utilizando el factor de propagacion (...variable)
//pero ojo si necesitamos que la funcion devuelva valores utilizamos return
function sumar(...datos){
    var res=datos.reduce((a,b)=> a + b);
    return res;
}
//asignamos a una variable el resultado de una funcion
const res= sumar(1,2,3)
console.log(res)

//ambito de las variables: dentro de funcion si se puede acceder a variables de fuera
//fuera de funcion no se puede acceder a var declaradas dentro de funciones
//funciones tipo fl
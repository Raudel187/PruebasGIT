//funciones tipo flecha
const lista=[1,3,5,7,11];
//obtener lista 2 a partir de lista
const lista2 = lista.map((valor)=> valor* 2);
//definir todas las variables y funciones al inicio del script
const doblevalor= valor=>valor*2;
const lista3=lista.map(doblevalor);
console.log(lista3);
//carga y sobrecarga de funciones
function saludar(){
    hola()
}
function hola(){
    console.log("hola");
}
saludar();
//1 inicia el intertrepe con la funcion global que es saludar y asi internnamente y despues hacia afuera
//stackoverflow.com link interesante de dudas y respuestas
//func asincronas llamadas a bd externas pueden tardar
function asig(){
}
    //hace una llamada a una bd externa, desconocemos el estado de  red etc
    //se define a traves de las promesas 
    const prom =new Promise((resolve, reject)=>{
        const i= Math.floor(Math.random()*2)
        console.log(i)
        if(i!==0){
            resolve();//exitos
        }else{
            reject(); //rechazos
        }
    })
//captamos el resultado exitosa de la promesa con then y viceversa catch
    prom.then(()=> console.log("Exito"));
    prom.catch(()=>console.log("Error"));
    prom.finally(()=>console.log("Siempre me ejecuto"));
    //funciones generadoras llevan el asteristico
    //generar un id con una function
    function* generar(){
        let id=0;
        while(true){
            id++;
            yield id; //se detiene y avanza hasta q se vuele a llamar
        if(id>10){
            return
        }
        }
    }
    const v= generar();
    console.log(v.next().value);
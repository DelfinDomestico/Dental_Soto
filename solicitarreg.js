class CCliente{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        this.servicios=[];
    }
    es_menor(){
        return edad<18;
    }
    set_datos(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    add_servicio(serv){
        this.servicios.push(serv);
    }
    mostrar_servicios(){
        for(let i=0;i<this.servicios.length;++i){
            console.log(servicios[i]);
        }
    }
    get_servicios(){
        return this.servicios;
    }
    buscar_servicio(nombreServicio){
        let serv;
        for(let i=0;i<this.servicios.length;++i){
            if(this.servicios[i].nombre==nombreServicio){
                serv=this.servicios[i];
                return serv;
            }
        }
    }
    costo_total(){
        let costo=0;
        for(let i=0;i<this.servicios.length;++i){
            costo+=this.servicios[i].costo;
        }
        return costo;
    }
}
//desestructurador
const desestructurar_servicios=([nombre,costo])=>{
    console.log(nombre,costo);
};
//desestructurador
// funciones de los botones
let button_añadirendodoncia=document.getElementById("añadir-endodoncia");
let button_añadirlimpieza=document.getElementById("añadir-limpieza");
let button_mostrarservicios=document.getElementById("mostrar-servicios");
button_añadirendodoncia.onclick=()=>{cliente.add_servicio({nombre : 'Endodonsia', costo : 50});
Toastify({
    text: "Endodonsia añadida a la lista de servicios"
}).showToast();
};
button_añadirlimpieza.onclick=()=>{cliente.add_servicio({nombre : 'Limpieza', costo : 30});
Toastify({
    text: "Limpieza añadida a la lista de servicios"
}).showToast();};
button_mostrarservicios.onclick=()=>{
    cliente.mostrar_servicios();
};
//fin funciones de botones


let nombre=prompt('Ingrese su nombre por favor');
let edad=prompt('Ingrese su edad por favor');
cliente=new CCliente(nombre,edad);
while(cliente.es_menor())
{
    alert('No cumple con la edad');
    nombre=prompt('Ingrese su nombre por favor');
    edad=prompt('Ingrese su edad por favor');
    cliente.set_datos(nombre,edad);
}



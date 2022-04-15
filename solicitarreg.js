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
cliente.add_servicio({nombre : 'Endodonsia', costo : 50});
console.log(cliente.buscar_servicio('Endodonsia'));

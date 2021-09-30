class Vehiculo {
    marca:string
    fecha:string
    puertas:number

    constructor(marca_:string, fecha_:string, puertas_:number) {
        this.marca = marca_
        this.fecha = fecha_
        this.puertas = puertas_
    }

    acelerar():void {
        console.log('ojo que Acelero')
    }
    frenar():void {
        console.log('ojo que Freno')
    }
}


const coche = new Vehiculo('Ford', '12/7/2021',4)

coche.marca
coche.fecha
console.log(coche.marca)
coche.acelerar()
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log('ojo que Acelero');
    };
    Vehiculo.prototype.frenar = function () {
        console.log('ojo que Freno');
    };
    return Vehiculo;
}());
var coche = new Vehiculo('Ford', '12/7/2021', 4);
coche.marca;
coche.fecha;
console.log(coche.marca);
coche.acelerar();

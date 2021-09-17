const mostrar = (nombre:string, apellido:string, edad:number = 32) => {
    return `Se llama ${nombre} se apellida ${apellido} y tiene ${edad} años`
}

console.log(mostrar('Moises', 'Magna'));
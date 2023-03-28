
// tipos primitos
// number

function somar(num1:number, num2:number) {
    return num1 + num2
}

// não default - quando preciso ou tenho mais de um módulo a ser exportado
// export { somar, verificaNumeros };


// default - se o arquivo em questão tiver apenas 1 módulo a ser exportado
export default somar;




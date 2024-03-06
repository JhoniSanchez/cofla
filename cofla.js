

const arra = [1, 2, 3, 4, 5, 6, 7]

const aa = (dd) => {
    let cofra = prompt("Monto condecimales")
    let monto = parseFloat(cofra)
    console.log(cofra)

    for (let i = 0; i < arra.length; i++) {
        if (monto >= arra[i] && monto <= arra[i]) {
            alert(`${dd} Monto es ${monto.toFixed(2)} ,precio es ${arra[i]},  devuleta es ${parseFloat(monto - arra[i]).toFixed(2)}`)
            return
        }
    }
    alert(`Monto es ${monto.toFixed(2)} ,precio maxio es 7,  no hay capacidad de pago`)

}

aa("Jhoni")
aa("Jose")
aa("Mauel")
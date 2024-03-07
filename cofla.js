
const menu = {
    "palito de helado de agua": 0.6,
    "palito de helado de crema": 1,
    "Bombom helado marca heladix": 1.6,
    "bombom helado marca heladovich": 1.7,
    "bombom helado marca helardo": 1.8,
    "potecito de helado con confetis o pote de 1./4": 2.9,
    "Limite": 1000000
}

const arra = Object.entries(menu)

const aa = (dd) => {
    let cofra = prompt("Ingresar monto disponible para comprar")
    let monto = parseFloat(cofra)
    for (let i = 0; i < arra.length; i++) {
        if (monto >= arra[i][1] && monto < arra[i + 1][1]) {
            alert(`${dd} Para el monto ${monto.toFixed(2)}, el eleado mas caro a comprar es ${arra[i][0]}, por el precio de ${arra[i][1]},  devuleta es ${parseFloat(monto - arra[i][1]).toFixed(2)}`)
            return
        }
    }
    alert(`Para el monto ${monto}, no hay elados disponibles`)
}

aa("Cliente:_____,")
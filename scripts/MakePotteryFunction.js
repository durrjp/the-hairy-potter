
let idCounter = 0
let potteryObj = {}

const MakePottery = (shape, weight, height) => {
    idCounter += 1
    potteryObj = {
        id: idCounter,
        shape: shape,
        weight: weight,
        height: height
    }
    return potteryObj
}

const KilnFunction = (potteryObj, temperature) => {
    potteryObj.fired = true
    if (temperature > 2200) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }
    return potteryObj
}

const potteryToSell = []
export const potteryForSale = potteryToSell.slice()

const ToSellOrNotToSell = (potteryObj) => {
    potteryObj.weight > 3 ? potteryObj.price=40 : potteryObj.price=20
    if (potteryObj.cracked === false) {
        potteryToSell.push(potteryObj)
    }

}

const potParameters = [
    {
        shape: "circle",
        weight: 20,
        height: 10,
        temperature: 2100
    },
    {
        shape: "vase shape",
        weight: 5,
        height: 2,
        temperature: 1800
    },
    {
        shape: "square",
        weight: 10,
        height: 2,
        temperature: 2400
    },
    {
        shape: "lizard shape",
        weight: 5,
        height: 5,
        temperature: 2200
    },
    {
        shape: "U-shaped",
        weight: 1,
        height: 1,
        temperature: 2150
    },
]

 export const PotsAssembly = () => {
    potParameters.map(potParamObject => {
        const madePot = MakePottery(potParamObject.shape, potParamObject.weight, potParamObject.height)
        const firedPot = KilnFunction(madePot, potParamObject.temperature)
        ToSellOrNotToSell(firedPot)
    })
    return potteryToSell
}



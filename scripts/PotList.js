import { Pot } from "./Pot.js"
import { PotsAssembly } from "./MakePotteryFunction.js"

const contentTarget = document.querySelector("#inventory")
const eventHub = document.querySelector("#inventory")

export const PotList = () => {
    const potteryToSell = PotsAssembly()
    console.log(potteryToSell)
    contentTarget.innerHTML = potteryToSell.map(pot => {
        return Pot(pot)
    }).join("")
}

eventHub.addEventListener("sellPotButtonClicked", event => {
    const potShape = event.detail.shape
    const potPrice = event.detail.price
    window.alert(`You sold a ${potShape} for ${potPrice}`)
})


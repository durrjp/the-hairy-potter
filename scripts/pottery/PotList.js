import { Pot } from "./Pot.js"
import { usePots } from "./potProvider.js"

const contentTarget = document.querySelector("#inventory")
const eventHub = document.querySelector("#inventory")

export const PotList = () => {
    const potteryToSell = usePots()
    console.log(potteryToSell)
    contentTarget.innerHTML = potteryToSell.map(pot => {
        if (pot.cracked === false) {
            return Pot(pot)
        }
    }).join("")
}

eventHub.addEventListener("sellPotButtonClicked", event => {
    const potShape = event.detail.shape
    const potPrice = event.detail.price
    window.alert(`You sold a ${potShape} for ${potPrice}`)
})


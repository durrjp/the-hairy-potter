export const Pot = (potObj) => {
    return `
    <div class="singlePot--${potObj.id}">
        <p id="shape--${potObj.id}">${potObj.shape}</p>
        <p>${potObj.weight} lbs</p>
        <p>${potObj.height} inches</p>
        <p id="price--${potObj.id}">$${potObj.price}</p>
        <button id="sellPotButton--${potObj.id}">Sell</button>
    </div>
    `
}

const eventHub = document.querySelector("#inventory")

eventHub.addEventListener("click", event => {
    if (event.target.id.includes("sellPotButton--")) {
        const [button, potId] = event.target.id.split("--")
        const parsedPotId = parseInt(potId)
        const potShape = document.getElementById(`shape--${parsedPotId}`).innerHTML
        const potPrice = document.getElementById(`price--${parsedPotId}`).innerHTML
        
        const potIsSoldEvent = new CustomEvent("sellPotButtonClicked",{
            detail: {
                shape: potShape,
                price: potPrice
            }
        })
        eventHub.dispatchEvent(potIsSoldEvent)
    }
})

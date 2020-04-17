let pots = []

export const getPots = () => {
    return fetch('http://localhost:2999/pottery')
        .then(response => response.json())
        .then(parsedpots => {
            pots = parsedpots
        })
}
export const usePots = () => pots.slice()
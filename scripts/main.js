import { PotList } from "./pottery/PotList.js"
import { getPots } from "./pottery/potProvider.js"

getPots().then(PotList)
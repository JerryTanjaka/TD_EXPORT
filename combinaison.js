import {factorielle} from './factorielle.js'

function combinaison(n,p) {
    return (factorielle(n) / (factorielle(n-p) * factorielle(p)))
}
console.log(combinaison(3,2))
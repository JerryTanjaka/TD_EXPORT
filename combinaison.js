import factorielle from './'

function combinaison(n,p) {
    return (factorielle(n) / (factorielle(n-p) * factorielle(p)))
}
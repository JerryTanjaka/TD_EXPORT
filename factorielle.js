export function factorielle (n) {
    let test = 1;
    for (let i = 1; i <= n; i++) {
        test *= i;
    }
    return test
}

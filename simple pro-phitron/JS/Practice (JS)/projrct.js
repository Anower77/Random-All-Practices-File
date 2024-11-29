const saving = (payment, liveingConst)=> {
    if(typeof(payment) != 'object' || typeof(liveingConst) != 'number') {
        return "Invalid input"
    }

    // calculate saving 
    let tol_income = 0

    for(let payments of payment) {
        if(payments >= 3000) {
            tol_income += payments - payments * 20/100
        } else {
            tol_income += payments
        }
    }

    // saving 
    const savings = tol_income - liveingConst

    if(savings >= 0) {
        return savings 
    } else {
        return "enrn more"
    }

}

console.log(saving([1000, 2000, 3000], 5400))
console.log(saving([1000, 2000, 2500], 5000))
console.log(saving([900, 2700, 3400], 10000))
console.log(saving(100, [900, 2700, 3400]))
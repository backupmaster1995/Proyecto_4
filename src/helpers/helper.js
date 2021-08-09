//Diferencia de años
export function getYearDiference(year){
    return new Date().getFullYear() - year
}

//incremento segun marca
export function carTypeIncrement(type){
    let increment = 0;

    switch (type) {
        case "americano":
            increment = 1.15
            break;
        case "europeo":
            increment = 1.30
            break;
        case "asiatico":
            increment = 1.05
            break;
        default:
            break;
    }

    return increment
}

export function planPrice(plan){
    return plan === "basico" ? 1.20 : 1.50
}


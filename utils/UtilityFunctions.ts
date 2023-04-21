
export const getPercentage = (percentage: number, value: number, isRound = true): number => {
    var result = (percentage / 100) * value;
    return isRound ? Math.round(result) : result;
}

export const getPercentageOf = (portion: number, total: number, isRound = true): number => {
    var result = (portion / total) * 100;
    return isRound ? Math.round(result) : result;
}
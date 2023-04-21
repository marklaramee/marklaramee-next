
export const getPercentage = (percentage: number, value: number, isRound = true): number => {
    var result = (percentage / 100) * value;
    return isRound ? Math.round(result) : result;
}
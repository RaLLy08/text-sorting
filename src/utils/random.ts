const getRandomValue = (max: number, min: number = 0) => {
    return Math.round(Math.random() * (max - min) + min)
}

export default getRandomValue;
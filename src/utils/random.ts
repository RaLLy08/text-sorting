const getRandomValue = (max: number, min: number = 0) => {
    return Math.round(Math.random() * (max - min) + min)
}

const getRandomKey = <T>(obj: T): keyof T => {
    const keys = Object.keys(obj) as Array<keyof T>;
    const randIndex = Math.round(Math.random() * ( keys.length - 1));

    return keys[randIndex];
}

export { getRandomValue, getRandomKey };
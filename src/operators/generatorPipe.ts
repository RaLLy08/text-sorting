const generatorPipe = (...generators) => function* (initialValue) {
    yield initialValue;
    let currentInitGenValue = initialValue;

    for (const generator of generators) {
        currentInitGenValue = yield* generator(currentInitGenValue);
    }
}

export default generatorPipe;

import generatorPipe from "./generatorPipe";

test('generatorPipe test', () => {
    function* mockGen(val: number) {
        let mock = val;

        mock += 1;
        yield mock;
        mock += 1;
        yield mock;

        return mock;
    }

    function* mockGen2(val: number) {
        let mock = val;

        mock += 1;
        yield mock;
        mock += 1;
        yield mock;
        
        return mock;
    }

    const genPipe = generatorPipe(
        mockGen,
        mockGen2
    )(1);

    expect(genPipe.next().value).toBe(1)

    expect(genPipe.next().value).toBe(2)
    expect(genPipe.next().value).toBe(3) 
    
    expect(genPipe.next().value).toBe(4)
    expect(genPipe.next().value).toBe(5)
    expect(genPipe.next().done).toBe(true)
})

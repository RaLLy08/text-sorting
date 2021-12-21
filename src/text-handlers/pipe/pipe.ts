import { PipeType } from "../types";

const pipe: PipeType = (...fns) => (initialValue) => {
    return fns.reduce((acc, fn) => {
        return fn(acc);
    }, initialValue)
}

export default pipe;
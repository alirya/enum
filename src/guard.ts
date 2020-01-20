import Type from "./boolean/type";

export default function Guard<Enumerate>(
    value : any,
    enumerate : Enumerate,
    error : (value: any) => Error = (value: any) => new Error('type expect enumerate, given ' + value)
    ) : Enumerate[keyof Enumerate] {

    if(Type<Enumerate>(value, enumerate)) {

        return value;
    }

    throw error(value);
}
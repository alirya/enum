import Type from "./boolean/type";

export default function Guard<ENUMERATE>(
    value : any,
    enumerate : ENUMERATE,
    error : (value: any) => Error = (value: any) => new Error('type expect enumerate, given ' + value)
    ) : ENUMERATE {

    if(Type<ENUMERATE>(value, enumerate)) {

        return value;
    }

    throw error(value);
}
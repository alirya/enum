export default function Enum<Value>(
    value : unknown,
    enumerate : Record<string, Value>,
    valid : boolean
) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is part of enum "${enumerate}"`;

    } else {

        return `value "${string}" is not part of enum "${enumerate}"`;
    }
}


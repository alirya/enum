export default function Enum<Value>(
    valid : boolean,
    value : unknown,
    enumerate : Record<string, Value>,
) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is part of enum "${enumerate}"`;

    } else {

        return `value "${string}" is not part of enum "${enumerate}"`;
    }
}


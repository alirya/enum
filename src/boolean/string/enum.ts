import SafeCast from "@dikac/t-string/safe-cast";
import Name from "@dikac/t-object/string/name";

export default function Enum<Value>(
    valid : boolean,
    value : unknown,
    enumerate : Record<string, Value>,
) : string {

    let string = SafeCast(value);
    let enums = Name(enumerate);

    if(valid) {

        return `value "${string}" is part of enum "${enums}"`;

    } else {

        return `value "${string}" is not part of enum "${enums}"`;
    }
}


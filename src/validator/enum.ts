import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EnumValidatable from "../validatable/enum-dynamic";
import {Object} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import EnumString from "../validatable/string/enum";

/**
 * validate if given value is part of certain enumerate
 */

export default function Enum <
    Enumerate extends object
> (
    enumerate : Enumerate,
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<string, Enumerate, Object.UnionOf<Enumerate>>>;

export default function Enum <
    Enumerate extends object,
    MessageT
> (
    enumerate : Enumerate,
    message : (result:Readonly<Value<unknown> & Validatable>)=> MessageT
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

export default function Enum <
    Enumerate extends object,
    MessageT
> (
    enumerate : Enumerate,
    message : (result:Readonly<Value<unknown> & Validatable>)=> MessageT|string = EnumString
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>> {

    return function<Type extends Object.UnionOf<Enumerate>, Argument extends unknown>(value: Type|Argument) {

        return new EnumValidatable(value, enumerate, message);

    } as Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>

}

import EnumClassParameters, {EnumClassArgumentMessage} from "./enum-class-parameters";
import {Object} from "ts-toolbelt";
import ValidatorReturn from "@dikac/t-validator/validatable/simple";
import EnumParameters from "../assert/string/enum-parameters";


export type Type<Message, Enumerate extends Record<string, any>, Argument extends unknown> =
    ValidatorReturn<unknown, Argument, Object.UnionOf<Enumerate>, EnumClassParameters<Message, Enumerate, Argument>> & {enumerate : Enumerate};

export default function EnumFunctionParameters<Message, Enumerate extends object, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<Message, Enumerate>
) :  Type<Message, Enumerate, Argument>;

export default function EnumFunctionParameters<Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
) :  Type<string, Enumerate, Argument>;


export default function EnumFunctionParameters<Message, Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<Message|string, Enumerate> = EnumParameters
) :  Type<Message, Enumerate, Argument> {

    return <Type<Message, Enumerate, Argument>> new EnumClassParameters(value, enumerate, message);
}

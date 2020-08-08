import Function from "@dikac/t-function/function-single";
import EnumDynamic from "./enum-dynamic";
import {Object} from "ts-toolbelt";
import EnumValidatable from "./enum-dynamic";
import ValidatorReturn from "@dikac/t-validator/validatable/simple";

type Return<Message, Enumerate extends object, Argument extends unknown> =
    ValidatorReturn<unknown, Argument, Object.UnionOf<Enumerate>, EnumValidatable<Message, Enumerate>> & {enumerate : Enumerate};

export default function Enum<Message, Enumerate extends object, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : Function<Omit<Return<Message, Enumerate, Argument>, 'message'>, Message>
) :  Return<Message, Enumerate, Argument> {

    return <Return<Message, Enumerate, Argument>> new EnumDynamic(value, enumerate, message);
}

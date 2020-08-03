import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EnumValidatable from "../validatable/enum-dynamic";
import Function from "@dikac/t-function/function";
import {Object} from "ts-toolbelt";
import Return from "@dikac/t-validator/return/return";

export default class Enum<Enumerate extends object, MessageT>
    implements
        Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate>>,
        Message<Function<[Readonly<Value<unknown> & Validatable>], MessageT>>
{
    constructor(
        public enumerate : Enumerate,
        public message : Function<[Readonly<Value<unknown> & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate>> {

        return <Return<unknown, Argument, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate>>> new EnumValidatable(value, this.enumerate, this.message);
    }
}

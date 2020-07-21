import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EnumValidatable from "../validatable/enum-dynamic";
import Function from "@dikac/t-function/function";
import {Object} from "ts-toolbelt";

export type Return<Enumerate extends object, Msg> =
    Value<Object.UnionOf<Enumerate>> & Message<Msg> & Validatable<true> |
    Value<unknown> & Message<Msg> & Validatable<false>;

export default class Enum<Enumerate extends object, Msg>
    implements
        Validator<number, Validatable & Message<Msg> & Value<unknown>>,
        Message<Function<[Readonly<Value<unknown> & Validatable>], Msg>>
{
    constructor(
        public enumerate : Enumerate,
        public message : Function<[Readonly<Value<unknown> & Validatable>], Msg>
    ) {
    }

    validate(value: unknown): Readonly<Return<Enumerate, Msg>> {

        return <Return<Enumerate, Msg>> new EnumValidatable(value, this.enumerate, this.message);
    }
}

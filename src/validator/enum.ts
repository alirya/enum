import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EnumValidatable from "../validatable/enum-dynamic";
import {Object} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";

/**
 * validate if given value is part of certain enumerate
 */
export default class Enum<Enumerate extends object, MessageT>
    implements
        Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>,
        Message<(result:Readonly<Value<unknown> & Validatable>)=> MessageT>
{
    /**
     * @param enumerate
     * enumerate source
     *
     * @param message
     * message factory
     */
    constructor(
        public enumerate : Enumerate,
        public message : (result:Readonly<Value<unknown> & Validatable>)=> MessageT
    ) {
    }

    validate<Argument extends Object.UnionOf<Enumerate>>(value: Argument): Replace<EnumValidatable<MessageT, Enumerate, Argument>, true>
    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Argument>>
    validate<Argument extends unknown>(value: Argument)    {

        return new EnumValidatable(value, this.enumerate, this.message);
    }
}

import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import { Object } from "ts-toolbelt";
export default class EnumDynamic<MessageType, Enumerate extends object, ValueType> extends MergeWrapper<Value<unknown | Object.UnionOf<Enumerate>>, Message<MessageType>, Validatable> {
    readonly enumerate: Enumerate;
    constructor(value: ValueType, enumerate: Enumerate, message: (result: Readonly<Value<unknown | Object.UnionOf<Enumerate>> & Validatable & {
        enumerate: Enumerate;
    }>) => MessageType);
}

import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import { Object } from "ts-toolbelt";
export default class EnumDynamic<Msg, Enumerate extends object> extends MergeWrapper<Value<unknown | Object.UnionOf<Enumerate>>, Message<Msg>, Validatable> {
    readonly enumerate: Enumerate;
    constructor(value: unknown, enumerate: Enumerate, message: Function<[Readonly<Value<unknown | Object.UnionOf<Enumerate>> & Validatable & {
        enumerate: Enumerate;
    }>], Msg>);
}

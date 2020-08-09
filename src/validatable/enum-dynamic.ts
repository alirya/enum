import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import {Object} from "ts-toolbelt";
import MessageCallback from "@dikac/t-validator/validatable/callback";
import EnumGuard from "../boolean/enum";

export default class EnumDynamic<MessageT, Enumerate extends object, ValueT>
    extends MergeWrapper<Value<unknown|Object.UnionOf<Enumerate>>, Message<MessageT>, Validatable>
{
    readonly enumerate : Enumerate;

    constructor(
        value : ValueT,
        enumerate : Enumerate,
        message : Function<[Readonly<Value<unknown|Object.UnionOf<Enumerate>> & Validatable & {enumerate:Enumerate}>], MessageT>
    ) {

        let container : Value<unknown|Object.UnionOf<Enumerate>> = {
            value : value
        };

        let msg = MessageCallback(container, () => EnumGuard(value, this.enumerate), ()=>message(this));

        super(container, msg, msg);

        this.enumerate = enumerate;
    }
}

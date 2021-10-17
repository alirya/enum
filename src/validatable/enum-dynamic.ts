import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import {Object} from "ts-toolbelt";
import MessageCallback from "@dikac/t-validator/validatable/callback";
import EnumGuard from "../boolean/enum";

export default class EnumDynamic<MessageType, Enumerate extends object, ValueType>
    extends MergeWrapper<Value<unknown|Object.UnionOf<Enumerate>>, Message<MessageType>, Validatable>
{
    readonly enumerate : Enumerate;

    constructor(
        value : ValueType,
        enumerate : Enumerate,
        message : (result:Readonly<Value<unknown|Object.UnionOf<Enumerate>> & Validatable & {enumerate:Enumerate}>)=>MessageType
    ) {

        let container : Value<unknown|Object.UnionOf<Enumerate>> = {
            value : value
        };

        let msg = MessageCallback(container, () => EnumGuard(value, this.enumerate), ()=>message(this));

        super(container, msg, msg);

        this.enumerate = enumerate;
    }
}

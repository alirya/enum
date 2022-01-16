import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import MergeWrapper from "@alirya/validator/validatable/readonly-wrapper-parameter";
import {Object} from "ts-toolbelt";
import MessageCallback from "@alirya/validator/validatable/callback-function-parameter";
import EnumGuard from "../boolean/enum";
import MessageDynamic from "@alirya/validator/message/function/validatable-parameter";
import Dynamic from "@alirya/validator/value/validatable";
import Enumerate from "../enumerate/enumerate";

export type EnumClassArgument<EnumType extends Record<string, any>, ValueType>
    = Value<ValueType> & Enumerate<EnumType>;

export type EnumClassArgumentMessage<MessageType, EnumType extends Record<string, any>>
    = MessageDynamic<unknown|Object.UnionOf<EnumType>, MessageType, Dynamic<unknown|Object.UnionOf<EnumType>> & Enumerate<EnumType>>;


export default class EnumClassParameter<MessageType, EnumType extends Record<string, any>, ValueType>
    extends MergeWrapper<Value<unknown|Object.UnionOf<EnumType>> & Message<MessageType> & Validatable>
    implements Enumerate<EnumType>
{
    readonly enumerate : EnumType;

    constructor(
        argument : EnumClassArgument<EnumType, ValueType>
            & Message<EnumClassArgumentMessage<MessageType, EnumType>>,
    );
    constructor(
        argument :EnumClassArgument<EnumType, ValueType>,
        message : MessageDynamic<unknown|Object.UnionOf<EnumType>, MessageType>
    );
    constructor(
        argument : EnumClassArgument<EnumType, ValueType>
            & Message<EnumClassArgumentMessage<MessageType, EnumType>>,
        message ?: MessageDynamic<unknown|Object.UnionOf<EnumType>, MessageType>
    ) {

        super(MessageCallback({
            value : argument.value,
            message : message || argument.message,
            validation : (value) => EnumGuard(value, this.enumerate)
        }));

        this.enumerate = argument.enumerate;
    }
}

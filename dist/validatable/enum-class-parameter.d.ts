import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameter";
import { Object } from "ts-toolbelt";
import MessageDynamic from "@dikac/t-validator/message/function/validatable-parameter";
import Dynamic from "@dikac/t-validator/value/validatable";
import Enumerate from "../enumerate/enumerate";
export declare type EnumClassArgument<EnumType extends Record<string, any>, ValueType> = Value<ValueType> & Enumerate<EnumType>;
export declare type EnumClassArgumentMessage<MessageType, EnumType extends Record<string, any>> = MessageDynamic<unknown | Object.UnionOf<EnumType>, MessageType, Dynamic<unknown | Object.UnionOf<EnumType>> & Enumerate<EnumType>>;
export default class EnumClassParameter<MessageType, EnumType extends Record<string, any>, ValueType> extends MergeWrapper<Value<unknown | Object.UnionOf<EnumType>> & Message<MessageType> & Validatable> implements Enumerate<EnumType> {
    readonly enumerate: EnumType;
    constructor(argument: EnumClassArgument<EnumType, ValueType> & Message<EnumClassArgumentMessage<MessageType, EnumType>>);
    constructor(argument: EnumClassArgument<EnumType, ValueType>, message: MessageDynamic<unknown | Object.UnionOf<EnumType>, MessageType>);
}

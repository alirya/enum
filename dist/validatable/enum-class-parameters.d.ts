import { Object } from "ts-toolbelt";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";
import EnumClassParameter from "./enum-class-parameter";
export declare type EnumClassArgumentMessage<MessageType, Enumerate extends Record<string, any>> = Dynamic<unknown | Object.UnionOf<Enumerate>, MessageType, [Enumerate]>;
export default class EnumClassParameters<MessageType, Enumerate extends object, ValueType> extends EnumClassParameter<MessageType, Enumerate, ValueType> {
    constructor(value: ValueType, enumerate: Enumerate, message: EnumClassArgumentMessage<MessageType, Enumerate>);
}

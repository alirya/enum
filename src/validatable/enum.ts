import {Object} from 'ts-toolbelt';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import {ReadonlyWrapperParameter, ReadonlyWrapperType} from '@alirya/validator/validatable/readonly-wrapper';
import {CallbackParameter} from '@alirya/validator/validatable/callback';
import EnumGuard from '../boolean/enum';
import DynamicValidatable from '@alirya/validator/value/validatable';
import Enumerate from '../enumerate/enumerate';
import ValidatorReturn from '@alirya/validator/validatable/simple';
import EnumMessage from '../assert/string/enum';



export type EnumArgument<EnumType extends Record<string, any>, ValueType>
    = Value<ValueType> & Enumerate<EnumType>;

export type EnumArgumentMessage<
    MessageType,
    EnumType extends Record<string, any>
>
    = ValidatableParameter<unknown|Object.UnionOf<EnumType>, MessageType, DynamicValidatable<unknown|Object.UnionOf<EnumType>> & Enumerate<EnumType>>;

export class EnumClassParameter<MessageType, EnumType extends Record<string, any>, ValueType>
    extends ReadonlyWrapperParameter<Value<unknown|Object.UnionOf<EnumType>> & Message<MessageType> & Validatable>
    implements EnumClassType<MessageType, EnumType, ValueType>
{
    readonly enumerate : EnumType;

    constructor(
        argument : EnumArgument<EnumType, ValueType>
            & Message<EnumArgumentMessage<MessageType, EnumType>>,
    );
    constructor(
        argument :EnumArgument<EnumType, ValueType>,
        message : ValidatableParameter<unknown|Object.UnionOf<EnumType>, MessageType>
    );
    constructor(
        argument : EnumArgument<EnumType, ValueType>
            & Message<EnumArgumentMessage<MessageType, EnumType>>,
        message ?: ValidatableParameter<unknown|Object.UnionOf<EnumType>, MessageType>
    ) {

        super(CallbackParameter({
            value : argument.value,
            message : message || argument.message,
            validation : (value) => EnumGuard(value, this.enumerate)
        }));

        this.enumerate = argument.enumerate;
    }
}

export type EnumArgumentsMessage<
    MessageType,
    Enumerate extends Record<string, any>
>
    = ValidatableParameters<unknown|Object.UnionOf<Enumerate>, MessageType, [Enumerate]>;

export class EnumClassParameters<MessageType, Enumerate extends object, ValueType>
    extends EnumClassParameter<MessageType, Enumerate, ValueType>
{

    constructor(
        value : ValueType,
        enumerate : Enumerate,
        message : EnumArgumentsMessage<MessageType, Enumerate>
    ) {

        super({
            value,
            enumerate,
            message : ({value, valid, enumerate})=>message(value, valid, enumerate)
        });
    }
}

export interface EnumClassType<
    MessageType,
    EnumType extends Record<string, any>,
    ValueType
>
    extends ReadonlyWrapperType<Value<unknown|Object.UnionOf<EnumType>>, Message<MessageType>, Validatable>, Enumerate<EnumType> {
}


export type EnumReturn<Message, Enumerate extends Record<string, any>, Argument extends unknown> =
    ValidatorReturn<Argument, Object.UnionOf<Enumerate>, EnumClassParameters<Message, Enumerate, Argument>> & {enumerate : Enumerate};


export function EnumParameters<Message, Enumerate extends object, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumArgumentsMessage<Message, Enumerate>
) :  EnumReturn<Message, Enumerate, Argument>;

export function EnumParameters<Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
) :  EnumReturn<string, Enumerate, Argument>;


export function EnumParameters<Message, Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumArgumentsMessage<Message|string, Enumerate> = EnumMessage.Parameters
) :  EnumReturn<Message, Enumerate, Argument> {

    return <EnumReturn<Message, Enumerate, Argument>> new EnumClassParameters(value, enumerate, message);
}


export function EnumParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
        message,
    } : EnumArgument<Enumerate, Argument> & Message<EnumArgumentMessage<MessageType, Enumerate>>
) :  EnumReturn<MessageType, Enumerate, Argument>;

export function EnumParameter<Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
    } : EnumArgument<Enumerate, Argument>
) :  EnumReturn<string, Enumerate, Argument>;


export function EnumParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
        message = EnumMessage.Parameter,
    } : EnumArgument<Enumerate, Argument> & Partial<Message<EnumArgumentMessage<MessageType|string, Enumerate>>>
) :  EnumReturn<MessageType|string, Enumerate, Argument> {

    return EnumParameters(
        value,
        enumerate,
        (value, valid, enumerate) => message({value, valid, enumerate})
    );
}


namespace EnumClass {
    export const ClassParameters = EnumClassParameters;
    export const ClassParameter = EnumClassParameter;
    export const Parameters = EnumParameters;
    export const Parameter = EnumParameter;
    export type Argument<EnumType extends Record<string, any>, ValueType> = EnumArgument<EnumType, ValueType>;
    export type ArgumentMessage<
        MessageType,
        EnumType extends Record<string, any>
    > = EnumArgumentMessage<
        MessageType,
        EnumType
    >;
    export type ArgumentsMessage<
        MessageType,
        Enumerate extends Record<string, any>
    > = EnumArgumentsMessage<
        MessageType,
        Enumerate
    >;

    export interface ClassType<
        MessageType,
        EnumType extends Record<string, any>,
        ValueType
    > extends EnumClassType<
        MessageType,
        EnumType,
        ValueType
    > {}
    export type Return<
        MessageType,
        EnumType extends Record<string, any>,
        ValueType
    > = EnumReturn<
        MessageType,
        EnumType,
        ValueType
    >;
}
export default EnumClass;

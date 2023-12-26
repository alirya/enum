import {Object} from 'ts-toolbelt';
import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import {ReadonlyWrapperParameter, ReadonlyWrapperType} from '@axiona/validator/validatable/readonly-wrapper.js';
import {CallbackParameter} from '@axiona/validator/validatable/callback.js';
import EnumGuard from '../boolean/enum.js';
import DynamicValidatable from '@axiona/validator/value/validatable.js';
import Enumerate from '../enumerate/enumerate.js';
import ValidatorReturn from '@axiona/validator/validatable/simple.js';
import EnumMessage from '../assert/string/enum.js';



export type EnumArgument<EnumType extends Record<string, any>, ValueType>
    = Value<ValueType> & Enumerate<EnumType>;

export type EnumArgumentMessage<
    MessageType,
    EnumType extends Record<string, any>
>
    = ValidatableParameter<unknown|Object.UnionOf<EnumType>, MessageType, DynamicValidatable<unknown|Object.UnionOf<EnumType>> & Enumerate<EnumType>>;

export class EnumClassParameter<MessageType, EnumType extends Record<string, any>, ValueType>
    extends ReadonlyWrapperParameter<Value<unknown|Object.UnionOf<EnumType>> & Message<MessageType> & Validatable>
    implements  EnumClassContext<EnumType>
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

export type EnumClassContext<
    // MessageType,
    EnumType extends Record<string, any>,
    // ValueType
> = Enumerate<EnumType>


export type EnumValidatorType<Message, Enumerate extends Record<string, any>, Argument extends unknown> =
    ValidatorReturn<Argument, Object.UnionOf<Enumerate>, Message, EnumClassContext<Enumerate>>;


export function EnumParameters<Message, Enumerate extends object, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumArgumentsMessage<Message, Enumerate>
) : EnumValidatorType<Message, Enumerate, Argument>;

export function EnumParameters<Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
) : EnumValidatorType<string, Enumerate, Argument>;


export function EnumParameters<Message, Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumArgumentsMessage<Message|string, Enumerate> = EnumMessage.Parameters
) :  EnumValidatorType<Message, Enumerate, Argument> {

    return <EnumValidatorType<Message, Enumerate, Argument>> new EnumClassParameters(value, enumerate, message);
}


export function EnumParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
        message,
    } : EnumArgument<Enumerate, Argument> & Message<EnumArgumentMessage<MessageType, Enumerate>>
) :  EnumValidatorType<MessageType, Enumerate, Argument>;

export function EnumParameter<Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
    } : EnumArgument<Enumerate, Argument>
) :  EnumValidatorType<string, Enumerate, Argument>;


export function EnumParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
        message = EnumMessage.Parameter,
    } : EnumArgument<Enumerate, Argument> & Partial<Message<EnumArgumentMessage<MessageType|string, Enumerate>>>
) :  EnumValidatorType<MessageType|string, Enumerate, Argument> {

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

    export type Context<
        // MessageType,
        EnumType extends Record<string, any>,
        // ValueType
    > = EnumClassContext<
        // MessageType,
        EnumType
        // ValueType
    >
    export type Validator<
        MessageType,
        EnumType extends Record<string, any>,
        ValueType
    > = EnumValidatorType<
        MessageType,
        EnumType,
        ValueType
    >;
}

export default EnumClass;

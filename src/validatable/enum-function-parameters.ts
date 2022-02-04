import EnumClassParameters, {EnumClassArgumentMessage} from './enum-class-parameters';
import {Object} from 'ts-toolbelt';
import ValidatorReturn from '@alirya/validator/validatable/simple';
import EnumParameters from '../assert/string/enum-parameters';


export type EnumFunctionParametersReturn<Message, Enumerate extends Record<string, any>, Argument extends unknown> =
    ValidatorReturn<Argument, Object.UnionOf<Enumerate>, EnumClassParameters<Message, Enumerate, Argument>> & {enumerate : Enumerate};

export default function EnumFunctionParameters<Message, Enumerate extends object, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<Message, Enumerate>
) :  EnumFunctionParametersReturn<Message, Enumerate, Argument>;

export default function EnumFunctionParameters<Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
) :  EnumFunctionParametersReturn<string, Enumerate, Argument>;


export default function EnumFunctionParameters<Message, Enumerate extends Record<string, any>, Argument extends unknown>(
    value : Argument,
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<Message|string, Enumerate> = EnumParameters
) :  EnumFunctionParametersReturn<Message, Enumerate, Argument> {

    return <EnumFunctionParametersReturn<Message, Enumerate, Argument>> new EnumClassParameters(value, enumerate, message);
}

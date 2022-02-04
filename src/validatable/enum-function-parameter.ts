import EnumParameter from '../assert/string/enum-parameter';
import EnumFunctionParameters, {EnumFunctionParametersReturn} from './enum-function-parameters';
import Message from '@alirya/message/message';
import {EnumClassArgument, EnumClassArgumentMessage} from './enum-class-parameter';

export default function EnumFunctionParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
        message,
    } : EnumClassArgument<Enumerate, Argument> & Message<EnumClassArgumentMessage<MessageType, Enumerate>>
) :  EnumFunctionParametersReturn<MessageType, Enumerate, Argument>;

export default function EnumFunctionParameter<Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
    } : EnumClassArgument<Enumerate, Argument>
) :  EnumFunctionParametersReturn<string, Enumerate, Argument>;


export default function EnumFunctionParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>(
    {
        value,
        enumerate,
        message = EnumParameter,
    } : EnumClassArgument<Enumerate, Argument> & Partial<Message<EnumClassArgumentMessage<MessageType|string, Enumerate>>>
) :  EnumFunctionParametersReturn<MessageType|string, Enumerate, Argument> {

    return EnumFunctionParameters(
        value,
        enumerate,
        (value, valid, enumerate) => message({value, valid, enumerate})
    );
}

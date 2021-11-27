import { Type } from "./enum-function-parameters";
import Message from "@dikac/t-message/message";
import { EnumClassArgument, EnumClassArgumentMessage } from "./enum-class-parameter";
export default function EnumFunctionParameter<MessageType, Enumerate extends Record<string, any>, Argument extends unknown>({ value, enumerate, message, }: EnumClassArgument<Enumerate, Argument> & Message<EnumClassArgumentMessage<MessageType, Enumerate>>): Type<MessageType, Enumerate, Argument>;
export default function EnumFunctionParameter<Enumerate extends Record<string, any>, Argument extends unknown>({ value, enumerate, }: EnumClassArgument<Enumerate, Argument>): Type<string, Enumerate, Argument>;

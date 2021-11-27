import EnumParameters, {
    EnumClassArgument,
    EnumClassArgumentMessage
} from "./enum-class-parameter";
import EnumParameter from "./enum-class-parameters";

namespace EnumClass {

    export const Parameters = EnumParameters
    export const Parameter = EnumParameter
    export type Argument<Enumerate extends Record<string, any>, ValueType> = EnumClassArgument<Enumerate, ValueType>
    export type ArgumentMessage<MessageType, Enumerate extends object> = EnumClassArgumentMessage<MessageType, Enumerate>
}

export default EnumClass;

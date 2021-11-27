import EnumParameters, { EnumClassArgument, EnumClassArgumentMessage } from "./enum-class-parameter";
import EnumParameter from "./enum-class-parameters";
declare namespace EnumClass {
    const Parameters: typeof EnumParameters;
    const Parameter: typeof EnumParameter;
    type Argument<Enumerate extends Record<string, any>, ValueType> = EnumClassArgument<Enumerate, ValueType>;
    type ArgumentMessage<MessageType, Enumerate extends object> = EnumClassArgumentMessage<MessageType, Enumerate>;
}
export default EnumClass;

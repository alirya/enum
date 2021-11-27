import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper-parameter";
import MessageCallback from "@dikac/t-validator/validatable/callback-function-parameter";
import EnumGuard from "../boolean/enum";
export default class EnumClassParameter extends MergeWrapper {
    constructor(argument, message) {
        super(MessageCallback({
            value: argument.value,
            message: message || argument.message,
            validation: (value) => EnumGuard(value, this.enumerate)
        }));
        this.enumerate = argument.enumerate;
    }
}
//# sourceMappingURL=enum-class-parameter.js.map
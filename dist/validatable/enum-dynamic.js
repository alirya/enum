import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import MessageCallback from "@dikac/t-validator/validatable/callback";
import EnumGuard from "../boolean/enum";
export default class EnumDynamic extends MergeWrapper {
    constructor(value, enumerate, message) {
        let container = {
            value: value
        };
        let msg = MessageCallback(container, () => EnumGuard(value, this.enumerate), () => message(this));
        super(container, msg, msg);
        this.enumerate = enumerate;
    }
}
//# sourceMappingURL=enum-dynamic.js.map
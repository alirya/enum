import EnumValidatable from "../validatable/enum-dynamic";
/**
 * validate if given value is part of certain enumerate
 */
export default class Enum {
    /**
     * @param enumerate
     * enumerate source
     *
     * @param message
     * message factory
     */
    constructor(enumerate, message) {
        this.enumerate = enumerate;
        this.message = message;
    }
    validate(value) {
        return new EnumValidatable(value, this.enumerate, this.message);
    }
}
//# sourceMappingURL=enum.js.map
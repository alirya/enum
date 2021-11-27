import EnumClassParameter from "./enum-class-parameter";
export default class EnumClassParameters extends EnumClassParameter {
    constructor(value, enumerate, message) {
        super({
            value,
            enumerate,
            message: ({ value, valid, enumerate }) => message(value, valid, enumerate)
        });
    }
}
//# sourceMappingURL=enum-class-parameters.js.map
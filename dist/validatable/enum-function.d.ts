import EnumParameters from "./enum-class-parameter";
import EnumParameter from "./enum-class-parameters";
declare namespace EnumFunction {
    const Parameters: typeof EnumParameters;
    const Parameter: typeof EnumParameter;
}
export default EnumFunction;

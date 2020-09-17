import EnumParameter from "../../assert/string/enum";
/**
 * message for between validation
 */
export default function Enum(instance) {
    return EnumParameter(instance.valid, instance.value, instance.enumerate);
}
//# sourceMappingURL=enum.js.map
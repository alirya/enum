import Enum from "./enum";
import EnumString from "../validatable/string/enum";

export default function EnumStandard<Enumerate extends object>(enumerate : Enumerate) : Enum<Enumerate, string> {

    return new Enum<Enumerate, string>(enumerate, EnumString);
}

import Enum from "./enum";
import EnumString from "../validatable/string/enum";
import Validator from "@dikac/t-validator/simple";
import {Object} from "ts-toolbelt";
import EnumValidatable from "../validatable/enum-dynamic";

export default function EnumStandard<
    Enumerate extends object
>(
    enumerate : Enumerate
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<string, Enumerate, Object.UnionOf<Enumerate>>>  {

    return Enum<Enumerate, string>(enumerate, EnumString);
}

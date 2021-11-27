import Validator from "@dikac/t-validator/simple";
import EnumValidatable, { EnumClassArgumentMessage } from "../validatable/enum-class-parameters";
import { Object } from "ts-toolbelt";
/**
 * validate if given value is part of certain enumerate
 */
export default function EnumParameters<Enumerate extends object>(enumerate: Enumerate): Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<string, Enumerate, Object.UnionOf<Enumerate>>>;
export default function EnumParameters<Enumerate extends object, MessageT>(enumerate: Enumerate, message: EnumClassArgumentMessage<MessageT | string, Enumerate>): Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

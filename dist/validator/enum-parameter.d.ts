import Validator from "@dikac/t-validator/simple";
import EnumValidatable, { EnumClassArgumentMessage } from "../validatable/enum-class-parameter";
import { Object } from "ts-toolbelt";
/**
 * validate if given value is part of certain enumerate
 */
export default function EnumParameter<Enumerate extends Record<string, any>>(enumerate: Enumerate): Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<string, Enumerate, Object.UnionOf<Enumerate>>>;
export default function EnumParameter<Enumerate extends Record<string, any>, MessageT>(enumerate: Enumerate, message: EnumClassArgumentMessage<MessageT | string, Enumerate>): Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

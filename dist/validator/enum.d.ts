import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import EnumValidatable from "../validatable/enum-dynamic";
import { Object } from "ts-toolbelt";
/**
 * validate if given value is part of certain enumerate
 */
export default function Enum<Enumerate extends object, MessageT>(enumerate: Enumerate, message: (result: Readonly<Value<unknown> & Validatable>) => MessageT): Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

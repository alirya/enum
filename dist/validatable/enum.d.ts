import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import { Return } from "../validator/enum";
export default function Enum<Msg, Enumerate extends object>(value: unknown, enumerate: Enumerate, message: Function<[Readonly<Value<Return<Enumerate, Msg>> & Validatable & {
    enumerate: Enumerate;
}>], Msg>): Readonly<Return<Enumerate, Msg> & {
    enumerate: Enumerate;
}>;

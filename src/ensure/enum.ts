import Assert from "../assert/enum";
import Function from "@dikac/t-function/function";
import Throwable from "../assert/throwable/enum";

export default function Enum<Enumerate>(
    value : unknown,
    enumerate : Enumerate,
    error : Function<[Enumerate, unknown], Error> = Throwable
    ) : Enumerate[keyof Enumerate] {

    Assert<Enumerate>(value, enumerate, error);

    return value;
}

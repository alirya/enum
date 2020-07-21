import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import { Object } from "ts-toolbelt";
/**
 * message for between validation
 */
export default function Enum<Enumerate extends object>(instance: Readonly<{
    enumerate: Enumerate;
} & Value<unknown | Object.UnionOf<Enumerate>> & Validatable>): string;

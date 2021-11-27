import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function EnumParameter({ value, valid, subject, enumerate, }: Value<unknown> & Validatable & {
    subject?: string;
    enumerate?: string | object;
}): string;

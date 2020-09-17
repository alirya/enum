import EnumDynamic from "./enum-dynamic";
import { Object } from "ts-toolbelt";
import ValidatorReturn from "@dikac/t-validator/validatable/simple";
declare type Return<Message, Enumerate extends object, Argument extends unknown> = ValidatorReturn<unknown, Argument, Object.UnionOf<Enumerate>, EnumDynamic<Message, Enumerate, Argument>> & {
    enumerate: Enumerate;
};
export default function Enum<Message, Enumerate extends object, Argument extends unknown>(value: Argument, enumerate: Enumerate, message: (result: Omit<Return<Message, Enumerate, Argument>, 'message'>) => Message): Return<Message, Enumerate, Argument>;
export {};

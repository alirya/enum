import EnumClassParameters, { EnumClassArgumentMessage } from "./enum-class-parameters";
import { Object } from "ts-toolbelt";
import ValidatorReturn from "@dikac/t-validator/validatable/simple";
export declare type Type<Message, Enumerate extends Record<string, any>, Argument extends unknown> = ValidatorReturn<Argument, Object.UnionOf<Enumerate>, EnumClassParameters<Message, Enumerate, Argument>> & {
    enumerate: Enumerate;
};
export default function EnumFunctionParameters<Message, Enumerate extends object, Argument extends unknown>(value: Argument, enumerate: Enumerate, message: EnumClassArgumentMessage<Message, Enumerate>): Type<Message, Enumerate, Argument>;
export default function EnumFunctionParameters<Enumerate extends Record<string, any>, Argument extends unknown>(value: Argument, enumerate: Enumerate): Type<string, Enumerate, Argument>;

import Enum from "./enum";
export default function EnumStandard<Enumerate extends object>(enumerate: Enumerate): Enum<Enumerate, string>;

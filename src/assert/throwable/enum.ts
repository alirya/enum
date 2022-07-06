import EnumType from '../string/enum.js';
import Value from '@alirya/value/value.js';

export function EnumParameters(
    value : unknown,
    enumerate : string|Record<string, any> = ''
) : Error {

    return new Error(EnumType.Parameters(value, false, enumerate));
}

export type EnumArgument = Value & {enumerate : string|Record<string, any>};

export function EnumParameter(
    {
        value,
        enumerate,
    } : EnumArgument
) : Error {

    return EnumParameters(value, enumerate);
}


namespace Enum {
    export const Parameters = EnumParameters;
    export const Parameter = EnumParameter;
    export type Argument = EnumArgument;
}
export default Enum;

import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
export function EnumParameters(
    value : unknown,
    valid : boolean,
    enumerate : string|Record<string, any> = '',
    subject  = 'value',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');

    }

    strings.push('value of enum', enumerate.toString());

    return strings.join(' ').trim() + '.';

}

export type EnumArgument = Value<unknown> & Validatable & {
    subject ?: string,
    enumerate ?: string|object,
};

export function EnumParameter(
    {
        value,
        valid,
        subject,
        enumerate,
    } : EnumArgument
) : string {

    return EnumParameters(value, valid, enumerate, subject);
}


namespace Enum {
    export const Parameters = EnumParameters;
    export const Parameter = EnumParameter;
    export type Argument = EnumArgument;
}
export default Enum;

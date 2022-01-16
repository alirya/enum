import EnumType from '../string/enum-parameters';

export default function EnumParameters(
    value : unknown,
    enumerate : string|Record<string, any> = ''
) : Error {

    return new Error(EnumType(value, false, enumerate));
}

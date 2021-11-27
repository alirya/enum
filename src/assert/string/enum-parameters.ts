export default function EnumParameters(
    value : unknown,
    valid : boolean,
    enumerate : string|Record<string, any> = '',
    subject : string = 'value',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');

    }

    strings.push('value of enum', enumerate.toString())

    return strings.join(' ').trim() + '.';

}


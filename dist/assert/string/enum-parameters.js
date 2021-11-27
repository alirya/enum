export default function EnumParameters(value, valid, enumerate = '', subject = 'value') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('value of enum', enumerate.toString());
    return strings.join(' ').trim() + '.';
}
//# sourceMappingURL=enum-parameters.js.map
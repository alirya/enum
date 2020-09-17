import Sentences from "@dikac/t-string/message/sentences-must";
export default function Enum(valid, value, enumerate = '', subject = '') {
    const sentence = Sentences(valid, [subject]);
    sentence.expect = ['value of enum', enumerate];
    return sentence.message;
}
//# sourceMappingURL=enum.js.map
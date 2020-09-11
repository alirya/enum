import Sentences from "@dikac/t-string/message/sentences-must";
import Name from "@dikac/t-object/string/name";

export default function Enum(
    valid : boolean,
    value : unknown,
    enumerate : string = '',
    subject : string = ''
) : string {

    const sentence = Sentences(valid, [subject]);

    sentence.expect = ['value of enum', enumerate];
    return sentence.message;

}


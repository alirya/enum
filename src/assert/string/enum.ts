import Sentence from "@dikac/t-string/message/sentence";
import Name from "@dikac/t-object/string/name";

export default function Enum(
    valid : boolean,
    value : unknown,
    enumerate : string = '',
    subject : string = ''
) : string {

    const sentence = new Sentence(
        valid,
        subject,
        {
            invalid:'is not value of enum',
            valid:'is value of enum',
        }, ''
    );

    sentence.type = enumerate;
    return sentence.message;

}


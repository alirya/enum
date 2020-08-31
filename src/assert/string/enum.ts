import Sentence from "@dikac/t-message/sentence";
import Name from "@dikac/t-object/string/name";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is not value of enum',
        valid:'is value of enum',
    }, ''
);


export default function Enum(
    valid : boolean,
    value : unknown,
    enumerate : string = '',
    subject : string = ''
) : string {

    sentence.subject = subject;
    sentence.valid = valid;
    sentence.object = enumerate;
    return sentence.message;

}


import Validator from '@alirya/validator/simple';
import EnumValidatable, {EnumClassArgumentMessage} from '../validatable/enum-class-parameters';
import {Object} from 'ts-toolbelt';
import EnumString from '../assert/string/enum-parameters';

/**
 * validate if given value is part of certain enumerate
 */

export default function EnumParameters <
    Enumerate extends object
> (
    enumerate : Enumerate,
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<string, Enumerate, Object.UnionOf<Enumerate>>>;

export default function EnumParameters <
    Enumerate extends object,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<MessageT|string, Enumerate>
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

export default function EnumParameters <
    Enumerate extends object,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<MessageT|string, Enumerate> = EnumString
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>> {

    return function<Type extends Object.UnionOf<Enumerate>, Argument extends unknown>(value: Type|Argument) {

        return new EnumValidatable(value, enumerate, message);

    } as Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

}

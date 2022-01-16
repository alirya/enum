import Validator from '@alirya/validator/simple';
import EnumValidatable, {EnumClassArgumentMessage} from '../validatable/enum-class-parameter';
import {Object} from 'ts-toolbelt';
import EnumString from '../assert/string/enum-parameter';
import EnumParameters from './enum-parameters';

/**
 * validate if given value is part of certain enumerate
 */

export default function EnumParameter <
    Enumerate extends Record<string, any>
> (
    enumerate : Enumerate,
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<string, Enumerate, Object.UnionOf<Enumerate>>>;

export default function EnumParameter <
    Enumerate extends Record<string, any>,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<MessageT|string, Enumerate>
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>>;

export default function EnumParameter <
    Enumerate extends Record<string, any>,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumClassArgumentMessage<MessageT|string, Enumerate> = EnumString
) : Validator<unknown, Object.UnionOf<Enumerate>, EnumValidatable<MessageT, Enumerate, Object.UnionOf<Enumerate>>> {

    return EnumParameters(
        enumerate,
        (value, valid, enumerate) => message({value, valid, enumerate})
    );

}

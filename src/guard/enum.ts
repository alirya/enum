export default function Enum<Enumerate>(value : unknown, enumerate : Enumerate) : value is Enumerate[keyof Enumerate] {

    for(let data in enumerate) {

        if(value === enumerate[data]) {

            return true;
        }
    }

    return false;

}

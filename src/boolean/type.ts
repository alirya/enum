export default function Type<Enumerate>(value : any, enumerate : Enumerate) : value is Enumerate[keyof Enumerate] {

    for(let data in enumerate) {

        if(value === enumerate[data]) {

            return true;
        }
    }

    return false;

}
export default function Type<ENUMERATE>(value : any, enumerate : ENUMERATE) : value is ENUMERATE {

    for(let data in enumerate) {

        if(value === enumerate[data]) {

            return true;
        }
    }

    return false;

}
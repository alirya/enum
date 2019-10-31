export default function Type<Type>(value : any, type : Type) : value is Type {

    for(let data in type) {

        if(value === type[data]) {

            return true;
        }
    }

    return false;

}
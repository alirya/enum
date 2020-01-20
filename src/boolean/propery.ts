
export default function Property<Enumerate extends (string|number|symbol), Value = any>(
    object : object,
    enumerate : Record<any, Enumerate>,
    value : (value : any) => value is Value

) : object is Record<Enumerate, Value> {

    let values : Enumerate[] = Object.values(enumerate);

    for(let property in object) {

        if(!values.includes(<Enumerate>property)) {

            return false;

        } else if(!value(object[property])) {

            return false;
        }
    }

    return true;
}
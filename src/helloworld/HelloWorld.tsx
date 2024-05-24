import "./HelloWorld.css"




export default function HelloWorld() {
    const name = "Florian";
    const fullName = name + " Weber"


    return (
        <>
            <p>
                Hallo
            </p>
            <p>
                World!!!
            </p>
            <p>
                fullName: {fullName}
            </p>
        </>
    )
}

import "./HelloWorld.css"
import {User} from "../User.ts";

export type HelloWorldProps = {
    param1?: string
    param2?: string
    fullName: string
    user: User
    myCallback: (result: string) => void
}

export default function HelloWorld(props: HelloWorldProps) {

    console.log("props:", props)

    props.myCallback("HALLLOOOOOO")

    return (
        <>
            <p>
                Hallo
            </p>
            <p>
                {props.param1}
            </p>
            <p>
                fullName: {props.fullName}
            </p>
        </>
    )
}

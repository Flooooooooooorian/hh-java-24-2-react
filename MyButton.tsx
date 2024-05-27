import {ChangeEvent, useState} from "react";

export default function MyButton() {

    const [text, setText] = useState<string>("")

    const onMyButtonClick = () => {
        console.log("click")
        console.log("Save Text: ",text)

        setText("")
    }

    const onMyInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)

        setText(event.target.value)
    }

    return (
        <div>
            <h3>MyButton</h3>
            <p>{text}</p>
            <input onChange={onMyInputChange} value={text}/>
            { text.length >= 5 && <button onClick={onMyButtonClick}>Press me</button>}
            { text.length >= 5
                ? <p>Good Job</p>
                : <p>At least 5 characters required</p> }
        </div>
    )
}

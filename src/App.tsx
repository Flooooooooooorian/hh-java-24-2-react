import './App.css'
import HelloWorld from "./helloworld/HelloWorld.tsx";
import {User} from "./User.ts";
import MyButton from "../MyButton.tsx";

export default function App() {

    const name = "Florian";
    const fullName = name + " Weber"

    const myUser: User = {
        id: "1",
        name: "Florian"
    }

    const callback = (result: string) => {
        console.log(result)
    }

    const articles = [
        {id: "1", title: "Hello", "content": "lorem ipsum"},
        {id: "2", title: "Test", "content": "lorem ipsum"},
        {id: "3", title: "Abc", "content": "lorem ipsum"},
        {id: "4", title: "Auto", "content": "lorem ipsum"},
        {id: "5", title: "Java", "content": "lorem ipsum"}]

    return (
        <div>
            <p>
                Hallo
            </p>
            <button>
                Press me
            </button>

            <HelloWorld fullName={fullName} user={myUser} myCallback={callback} />

            {articles.map((article) => <p>{article.title}</p>)}

            <MyButton />

        </div>
    )
}

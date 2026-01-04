import { nanoid } from "nanoid";

import { useState } from "react";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false,
        };
// yaha pe humne copy banayi hai todos ki aur usme naya todo push kiya hai fir settodos me copytodos ko set kar diya hai
// class-d-76-49:20
        let copytodos = [...todos];
        copytodos.push(newtodo);
        settodos(copytodos);


        // copy krne ka ek aur tarika
        
        // iska short form settodos([...todos, newtodo]);
        // clear the input field
        settitle("");
    };


    return (
        <>
            <h1>Create Tasks</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                />
                <br />
                <br />
                <button >Create Todo</button>
            </form>
        </>
    );
};

export default Create;
import { useState } from "react";

export const CompWhithProps = () => {

    const[texts, setText] = useState("");

    function update(word) {
        setText(word.target.value);
    }
    return (
        <div>
            <input type="text" value={texts} onChange={update} />
            <div>
                <p><b>USER:</b>{texts}</p>
            </div>
        </div>
    );
}
import * as React from "react"
import {useState, useRef, useEffect} from "react"
import { Link } from "gatsby"

import '../styles/pageStyle.css'

import Logo from "../images/Logo.png"


// markup
const Page = () => {

    const [value, setValue] = useState(0)
    const [text, setText] = useState("");
    const [writing, setWriting] = useState(false)
    const [goalReached, setGoalReached] = useState(false)
    const [goal, setGoal] = useState(0)

    const [typed, setTyped] = useState("");

    const onChange = (event) => {
        setText(event.target.value.replace(/\D/,''));
    };

    const onTypedChange = (event) => {
        setTyped(event.target.value)
        setValue((typed.split(' ').length - 1) / goal * 10000)
    }

    const inputEl = useRef(null);

    const onWritingClick = () => {
        if (text != "" && typeof(parseInt(text)) === 'number') {
            setWriting(true)
            setGoal(parseInt(text))
        }
        // inputEl.current.focus();
    }

    useEffect(() => {
        if (writing == true) {
            inputEl.current.focus();
        }
    }, [writing])


    return (
        <>
            <div class="page-content">
            <h1 class="page-logo">
                <img class="page-logo-image" alt="Qyll logo"  src={Logo} />
                <span class="page-logo-title">Qyll</span>
            </h1>
            {/* <div class="page-center">
                <p class="page-text">Set a word goal below and click 'Start Typing'.</p>
                <p class="page-text">Everything will go away and you will have a progress bar fill up as you type.</p>
                <p class="page-text">Don't worry about mistakes and just keep typing.</p>
                <p class="page-text">You can do this.</p>
            </div> */}

                <div class="write-block">
                    {writing === true ?
                    <>
                        <h1 class="page-percent">{parseInt((typed.split(' ').length - 1) / goal * 100)}%</h1>
                        <progress class="page-progress" value={(typed.split(' ').length - 1) / goal * 10000} max={10000} />
                            <textarea
                            class="page-word-input-hidden"
                            value={typed}
                            onChange={onTypedChange}
                            ref={inputEl}
                            spellCheck={false}
                        />
                        {
                            typed.split(' ').length - 1 >= goal ?
                            <>
                            <p class="page-text">You did it! Keep writing or use one of the options below to export your text.</p>
                            <button class="write-button" onClick={() => {navigator.clipboard.writeText(typed)}}>Copy Text</button>
                            <button class="write-button" onClick={() => {navigator.clipboard.writeText(typed)}}>Copy Text</button>


                            </>
                            :
                            <></>
                        }
                        
                        </>
                        :
                        <>
                            <input
                                class="page-word-input"
                                onChange={onChange}
                                value={text}
                                placeholder="Goal Word Count"
                                onfocus="this.placeholder=''"
                            />

                            <br />
                            <button class="write-button" onClick={() => onWritingClick()}>Start Writing</button>
                            <p class="page-text">You can export your writing once you hit your goal.</p>
                        </>
                    }
                </div>
            </div>
        
        </>
    )
}

export default Page

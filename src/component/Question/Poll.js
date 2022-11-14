import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiInit } from "../../store/apiInit";

function Poll({id: qid, optionOneText, optionTwoText, avatarURL}) {
    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.login)
    const [answer, setAnswer] = useState(undefined)
    const handleChange = (event) => { setAnswer(event.target.value) }
    const handleSubmit = (event) => {
        dispatch(apiInit({
            method: '_saveQuestionAnswer',
            data: { authedUser, qid, answer },
            successActionList: ['users/questionAnswered', 'questions/questionAnswered'],
            error: 'reject'
        }
        ))
        event.preventDefault()
    }
  return (
    <div>
            <div>
                <h2>Would you rather...</h2>
                <div className="poll">
                    <img className="avatar-large" src={avatarURL} alt="test" />
                    <form onSubmit={handleSubmit} className="form-answer">
                        <div className="radio-inputs">
                            <div className="option-one">
                                <input type="radio" value="optionOne" id="optionOne"
                                    onChange={handleChange} name="question" />
                                <label htmlFor="optionOne">{optionOneText}</label>
                            </div>
                            <div className="option-two">
                                <input type="radio" value="optionTwo" id="optionTwo"
                                    onChange={handleChange} name="question" />
                                <label htmlFor="optionTwo">{optionTwoText}</label>
                            </div>
                            <input className="submit-button" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Poll
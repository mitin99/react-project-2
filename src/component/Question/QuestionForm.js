import { React, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from "react-router"
import { apiInit } from "../../store/apiInit"

function QuestionForm() {
    const [optionOneText, setOptionOneText] = useState("")
    const [optionTwoText, setOptionTwoText] = useState("")
    const author = useSelector(state => state.login)
    const submitted = useSelector(state => state.form)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
          dispatch({
            type: 'form/reset'
          })
        };
      })
      const handleSubmit = event => {
        dispatch(apiInit({
          method: '_saveQuestion',
          data: { optionOneText, optionTwoText, author },
          successActionList: ['questions/questionAdded', 'users/questionAdded', 'form/formSubmitted'],
          error: 'reject'
        }
        ))
        event.preventDefault()
      }
  return submitted ? <Redirect to='/'></Redirect> : (
    <>  
      <form className="new-question-form" onSubmit={handleSubmit}>
          <div className="form-answer">
              <h4>Would you rather?</h4>
              <label>1.
                  <input type="text"
                  value={optionOneText}
                  onChange={(event) => setOptionOneText(event.target.value)} />
              </label>
              <label>2.
                  <input type="text"
                  value={optionTwoText}
                  onChange={(event) => setOptionTwoText(event.target.value)} />
              </label>
              <input className="submit-button" type="submit" disabled={submitted} />
          </div>
      </form>
      {submitted && "subimited"}
    </>
  )
}

export default QuestionForm
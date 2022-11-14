import React from 'react'

function QuestionItem({ optionOneText, optionTwoText, optionOneVotesCount, optionTwoVotesCount, avatarURL, option }) {
    const voteNumber = optionOneVotesCount + optionTwoVotesCount
    const votePercentage = (total,option) => {
        const result = (100/total)*option
        return Math.floor(result)
    }
    let option1Class, option2Class
    option1Class = option2Class = 'option'
    const optionDiv = <div className='option-voted'>You vote for this</div>
    option === "optionOne" ? option1Class += ' red-border' : option2Class += ' red-border'

    return (
        <>
            <h1>Would you rather?</h1>
            <img className='avatar-large' src={avatarURL} alt="avatar"></img>
            <ul>
                <li className={option1Class}>
                    {optionOneText} voted {optionOneVotesCount} times
                    <span className="percentage"> {votePercentage(voteNumber, optionOneVotesCount)}%</span>
                    {option === "optionOne" && optionDiv}
                </li>
                <li className={option2Class}>
                    {optionTwoText} voted {optionTwoVotesCount} times
                    <span className="percentage"> {votePercentage(voteNumber, optionTwoVotesCount)}%</span>
                    {option === "optionTwo" && optionDiv}
                </li>
            </ul>
        </>
        )
    }

export default QuestionItem
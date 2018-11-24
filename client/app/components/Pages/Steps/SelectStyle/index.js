import React, { Component } from 'react'
import Choice from '../../../QuestionTemplates/Choice'

class SelectStyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curQuestion: this.props.questions[0]
        }
    }

    render() {
        const { curQuestion } = this.state

        /* const curQuestion = {
            type: 'choice',
            title: 'What\'s your age?',
            options: [
                'Under 25',
                '25 to 40',
                '41 to 55',
                '56 to 70',
                '71 and Over'
            ],
            cssAttr: "xs"
        } */

        const questionTemplate = (question) => {
            console.log(question)
            switch (question.type) {
                case "choice":
                    return (<Choice question={question} />)
            }
        }

        return (
            <div className="container">{(curQuestion) ? questionTemplate(curQuestion) : null}</div>
        )
    }
}

export default SelectStyle
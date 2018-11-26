import React, { Component } from 'react'
import Choice from '../../../QuestionTemplates/Choice'
import './styles.scss'

class SelectStyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionIdx: 0,
            questionAnswer: '',
            curQuestion: this.props.questions.list[0]
        }

        this.prevQuestion = this.prevQuestion.bind(this)
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    componentWillMount() {
        if (Object.assign([], this.props.questions.list).length) {
            const curQuestionIdx = this.props.questions.curQuestionIdx

            this.setState({
                questionIdx: curQuestionIdx,
                questionAnswer: this.props.questions.list[curQuestionIdx]['answer'] || '',
                curQuestion: this.props.questions.list[curQuestionIdx]
            })
        }
    }

    prevQuestion() {
        let { questionIdx, questionAnswer } = this.state
        this.props.setQuestion(questionIdx, questionAnswer, 'prev')

        questionIdx--

        this.setState({
            questionIdx: questionIdx,
            curQuestion: this.props.questions.list[questionIdx]
        })
    }

    nextQuestion() {
        let { questionIdx, questionAnswer } = this.state
        this.props.setQuestion(questionIdx, questionAnswer, 'next')

        questionIdx++

        this.setState({
            questionIdx: questionIdx,
            curQuestion: this.props.questions.list[questionIdx]
        })

    }

    setAnswer(answer) {
        this.setState({ questionAnswer: answer })
    }

    render() {
        const { questionIdx, curQuestion, questionAnswer } = this.state

        const questionTemplate = (questionIdx, question) => {
            switch (question.type) {
                case "choice":
                    return (<Choice key={questionIdx} question={question} questionAnswer={questionAnswer} setAnswer={(answer) => this.setAnswer(answer)} />)
            }
        }

        return (
            <div className="container page-select-style">
                {(curQuestion) ? questionTemplate(questionIdx, curQuestion) : null}

                <div className="row mx-auto mt-4 buttons">
                    <div className="col-3 ml-auto mr-3">
                        <button type="button" className="btn waves-effect btn-block mx-auto" disabled={questionIdx == 0} onClick={this.prevQuestion}>
                            <i className="fa fa-caret-left mr-2" aria-hidden="true"></i> Back
                        </button>
                    </div>

                    <div className="col-3 ml-3 mr-auto">
                        <button type="button" className="btn waves-effect btn-block mx-auto" disabled={questionIdx == this.props.questions.list.length - 1} onClick={this.nextQuestion}>
                            Next <i className="fa fa-caret-right ml-2" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectStyle
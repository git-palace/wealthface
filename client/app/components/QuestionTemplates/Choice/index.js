import React, { Component } from 'react'
import './styles.scss'

class Choices extends Component {
    constructor(props) {
        super(props)
    }

    getClassName() {
        if (!this.props.question.cssAttr)
            return 'col-6'

        switch (this.props.question.cssAttr) {
            case 'xs':
                return 'col-6'

            case 'md':
                return 'col-8'

            case 'lg':
                return 'col-10'

            default:
                return 'col-6'
        }
    }

    selectChoice(event, answer) {
        if ($(event.target.parentElement).hasClass('selected'))
            $(event.target.parentElement).removeClass('selected')
        else
            $(event.target.parentElement).addClass('selected')
        $(event.target.parentElement).siblings().removeClass('selected').children('input').prop('checked', false)

        this.props.setAnswer(answer)
    }

    render() {
        const { question, questionAnswer } = this.props;

        return (
            <div className='d-flex flex-column choice-container'>
                <h1 className={'text-center mx-auto pb-3 col-12'}>{question.title}</h1>

                {(question.description) ? (<p className='description col-12 text-center my-2'>{question.description}</p>) : null}

                {
                    question.options.map((choice_value, key) => {
                        return (
                            <div key={key} className={'form-check choice mx-auto my-3 ' + this.getClassName() + (questionAnswer == choice_value ? ' selected' : '')}>
                                <input type='checkbox' className='form-check-input' id={'choice-' + key} onChange={(e) => this.selectChoice(e, choice_value)} checked={questionAnswer == choice_value} />
                                <label className='form-check-label col' htmlFor={'choice-' + key}>{choice_value}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Choices
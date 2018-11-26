import React, { Component } from 'react'
import RCSlider from 'rc-slider'
import './styles.scss'

class Slide extends Component {
    constructor(props) {
        super(props)
        debugger
    }

    onSlideChange(value) {
        this.props.setAnswer(value)
    }

    render() {
        const { question, questionAnswer } = this.props;

        return (
            <div className='d-flex flex-column slider-container'>
                <h1 className={'text-center mx-auto pb-3 col-12'}>{question.title}</h1>

                {(question.description) ? (<p className='description col-12 text-center my-2'>{question.description}</p>) : null}

                <div className='slider col-6 mx-auto my-3'>
                    <h2 className='text-center col-12'>${(questionAnswer || question.default).toLocaleString()}</h2>

                    <RCSlider className='col-12 my-5' min={question.min} max={question.max} step={question.step} defaultValue={questionAnswer || question.default} onChange={(value) => { this.onSlideChange(value) }} />

                    <h5 className='col-12 text-center'>Adjust the slider or input the value</h5>
                </div>
            </div>
        )
    }
}

export default Slide
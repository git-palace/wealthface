import React, { Component } from 'react'
import './styles.scss'

class Choices extends Component {
    constructor(props) {
        super(props)

        this.unCheckOthers = this.unCheckOthers.bind(this)
    }

    getClassName() {
        switch (this.props.question.cssAttr) {
            case "xs":
                return "col-6";
            default:
                return "col-8";
        }
    }

    unCheckOthers(event) {
        $(event.target.parentElement).addClass("selected")
        $(event.target.parentElement).siblings().removeClass("selected").children("input").prop("checked", false)
    }

    render() {
        return (
            <div className="d-flex flex-column choice-container">
                <h1 className={"text-center mx-auto pb-3 " + this.getClassName()}>{this.props.question.title}</h1>
                {
                    this.props.question.options.map((c_option, key) => {
                        return (
                            <div key={key} className={"form-check choice mx-auto my-3 " + this.getClassName()}>
                                <input type="checkbox" className="form-check-input" id={"choice-" + key} name="answer" onClick={this.unCheckOthers} />
                                <label className="form-check-label col" htmlFor={"choice-" + key}>{c_option}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Choices
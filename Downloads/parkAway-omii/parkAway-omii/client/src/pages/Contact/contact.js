import React, { Component } from "react"
import "./Contact.css"

class About extends Component {
    state = {
        text: {
            recipient: '',
            textmessage: '',
            carCompany: '',
            floorArea: '',
            location: ''
        }
    }
    sendText = _ => {
        const { text } = this.state;

        fetch(`http://localhost:3001/send-text?recipient=${+19897560563}&textmessage=${text.textmessage}%0A&carCompany=${text.carCompany}%0A&floorArea=${text.floorArea}%0A&location=${text.location}`)
            .catch(err => console.log(err))
    }
    render() {
        const { text } = this.state;
        const spacer = {
            margin: 8
        }
        const textArea = {
            borderRadius: 4
        }
        return (
            <>
                <div className="about-right">
                    <div className="detail-container">
                        <div className="detailHeading">
                            <h3>Book a Spot</h3>
                        </div>
                        <form>
                            <div>
                                <div>
                                    <label name="body" htmlFor="body" className="detail-info">Your Name</label>
                                    {/* <input value={this.state.message.body} onChange={this.onHandleChange} className="input" type="text" /> */}

                                    <input className="input" value={text.textmessage} style={textArea}
                                        onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />

                                </div>
                                <div>
                                    <label className="detail-info">Phone Number</label>
                                    <input value={text.texternumber}
                                        onChange={e => this.setState({ text: { ...text, texternumber: e.target.value } })}
                                        className="input" type="number" />
                                </div>
                                <div>
                                    <label className="detail-info">Car Name</label>
                                    <input
                                        value={text.carCompany}
                                        onChange={e => this.setState({ text: { ...text, carCompany: e.target.value } })}
                                        className="input" type="text" />
                                </div>
                                <div>
                                    <label className="detail-info">Total Area</label>
                                    <input
                                        value={text.floorArea}
                                        onChange={e => this.setState({ text: { ...text, floorArea: e.target.value } })}
                                        className="input" type="text" />
                                </div>
                                <div>
                                    <label className="detail-info">Location</label>
                                    <input
                                        value={text.location}
                                        onChange={e => this.setState({ text: { ...text, location: e.target.value } })}
                                        className="input" type="text" />
                                </div>
                                <div className="detailBtn">
                                    <button type="submit" onClick={this.sendText}>Book your parking spot</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default About;
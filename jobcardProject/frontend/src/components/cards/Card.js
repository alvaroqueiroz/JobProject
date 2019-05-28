import React, { Component, Fragment } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={"/static/Bojack.png"} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{this.props.card.name}</h5>
                            <p className="card-text">{this.props.card.service}</p>
                            <p className="card-text"><small className="text-muted">{this.props.card.email}</small></p>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
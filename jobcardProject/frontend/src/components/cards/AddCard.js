import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCard } from "../../actions/Cards";

export class Cardform extends Component {
    state = {
        name: '',
        email: '',
        service: '',
        description: '',
        image: ''
    }

    static propTypes = {
        addCard: PropTypes.func.isRequired
      };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
      e.preventDefault();
      const { name, email, service, description, image } = this.state;
      const card = { name, email, service, description, image };
      this.props.addCard(card);
      this.setState({
        name: '',
        email: '',
        service: '',
        description: '',
        image: ''
      });
    };

    render() {
        const { name, email, service, description, image} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Adicionar Cartão</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Serviço</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="service"
                    onChange={this.onChange}
                    value={service}
                    />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                    />
                </div>
                <div className="form-group">
                    <label>Imagem</label>
                    <input
                    className="form-control-file"
                    type="file"
                    name="image"
                    onChange={this.onChange}
                    value={image}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Enviar
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCard})(Cardform)

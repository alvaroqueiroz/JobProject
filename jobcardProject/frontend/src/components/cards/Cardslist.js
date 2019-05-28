import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCard } from '../../actions/Cards';
import Card from './Card';

export class Cardslist extends Component {
    static propTypes = {
        cardslist: PropTypes.array.isRequired,
        getCards: PropTypes.func.isRequired,
        deleteCard: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getCards()
    }

    render() {
        return (
            <Fragment>
                <p></p>
                    {this.props.cardslist.map(card => (
                        <Card key={card.id} card = {card} />
                    ))}
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    cardslist: state.cardslist.cardslist
});

export default connect(mapStateToProps, {getCards, deleteCard})(Cardslist);
//this.props.deleteCard.bind(this, card.id)
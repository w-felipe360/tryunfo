import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <>
        <h1 data-testid="name-card">
          {cardName}
        </h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h2 data-testid="description-card">{ cardDescription }</h2>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <h3 data-testid="rare-card">
          {cardRare}
        </h3>
        {cardTrunfo && <h1 data-testid="trunfo-card">Super Trunfo</h1>}
      </>);
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;

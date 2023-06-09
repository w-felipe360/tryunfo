import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = { // estados
      nome: '',
      descricao: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      select: '',
      check: false,
      botao: true,
      salvar: [],
      hasTrunfo: false,
    };
  }

  handleButton = () => {
    const { nome, descricao, attr1, attr2, attr3,
      image } = this.state;
    const noventa = 90;
    const maxNumber = 210;
    if (nome.length < 1) {
      return this.setState({ botao: true });
    }
    if (image.length < 1) {
      return this.setState({ botao: true });
    }
    if (descricao.length < 1) {
      return this.setState({ botao: true });
    }
    if (Number(attr1) > noventa) {
      return this.setState({ botao: true });
    }
    if (Number(attr2) > noventa) {
      return this.setState({ botao: true });
    }
    if (Number(attr3) > noventa) {
      return this.setState({ botao: true });
    }
    if (Number(attr1) < 0) {
      return this.setState({ botao: true });
    }
    if (Number(attr2) < 0) {
      return this.setState({ botao: true });
    }
    if (Number(attr3) < 0) {
      return this.setState({ botao: true });
    }
    if (Number(attr1) + Number(attr2) + Number(attr3) > maxNumber) {
      return this.setState({ botao: true });
    } return this.setState({ botao: false });
  }

  escreve = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value }, () => this.handleButton());
  }

limpaBotao = () => {
  const { nome, descricao, attr1, attr2, attr3,
    image, check, select } = this.state;

  this.setState((prevState) => ({ salvar: [...prevState.salvar, {
    nomeA: nome,
    descricaoA: descricao,
    attr1A: attr1,
    attr2A: attr2,
    attr3A: attr3,
    imageA: image,
    checkA: check,
    selectA: select }] }));

  this.setState({ nome: '',
    descricao: '',
    image: '',
    attr1: 0,
    attr2: 0,
    attr3: 0,
    select:
  'normal',
    botao: true });
  this.setState({ hasTrunfo: check });
}

render() {
  const { nome, descricao, attr1, attr2, attr3,
    image, check, select, botao, salvar, hasTrunfo } = this.state;
  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={ nome }
        cardDescription={ descricao }
        cardAttr1={ attr1 }
        cardAttr2={ attr2 }
        cardAttr3={ attr3 }
        cardImage={ image }
        cardRare={ select }
        cardTrunfo={ check }
        hasTrunfo={ hasTrunfo }
        isSaveButtonDisabled={ botao }
        onInputChange={ this.escreve }
        onSaveButtonClick={ this.limpaBotao }

      />
      <Card
        cardName={ nome }
        cardDescription={ descricao }
        cardAttr1={ attr1 }
        cardAttr2={ attr2 }
        cardAttr3={ attr3 }
        cardImage={ image }
        cardRare={ select }
        cardTrunfo={ check }
      />
      {
        salvar.map((carta) => (<Card
          key={ carta.name }
          cardName={ carta.nomeA }
          cardDescription={ carta.descricaoA }
          cardAttr1={ carta.attr1A }
          cardAttr2={ carta.attr2A }
          cardAttr3={ carta.attr3A }
          cardImage={ carta.imageA }
          cardRare={ carta.selectA }
          cardTrunfo={ carta.check }
        />))
      }
    </div>
  );
}
}

export default App;

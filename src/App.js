import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      descricao: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      select: '',
      check: false,
      botao: '',
    };
  }

  escreve = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
  }

  render() {
    const { nome, descricao, attr1, attr2, attr3, image, check, select, botao } = this.state;
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
          hasTrunfo
          isSaveButtonDisabled={ botao }
          onInputChange={ this.escreve }
          onSaveButtonClick={ botao }

        />
        <Card
          cardName={ this.state.nome }
          cardDescription={ this.state.descricao }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ select }
          cardTrunfo={ check }
        />
      </div>
    );
  }
}

export default App;

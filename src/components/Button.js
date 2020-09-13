import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Submit' : 'Prastut';
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;

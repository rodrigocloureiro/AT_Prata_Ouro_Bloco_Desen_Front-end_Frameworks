import { Component } from "react";
import './styles/MiniCard.css';

export default class MiniCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, text } = this.props;
    return (
      <div className="minicard">
        <img src={image} alt={title} />
        <p className="minicard_title">{title}</p>
        <div className="minicard_separator"></div>
        <p className="minicard_text">{text}</p>
      </div>
    );
  }
}

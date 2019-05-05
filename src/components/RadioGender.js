import React from 'react';

class RadioGender extends React.Component {
  render() {
    return (
      <div className="radio-container">
        <div className="gender-name">
          <span>{this.props.genderValue.title}</span>
        </div>
        <div className="gender-radio">
          <input
            type="radio"
            name="gender"
            value={this.props.genderValue.gender}
            onChange={this.props.handleChange}>
          </input>
        </div>
      </div>
    )
  }
}

export default RadioGender;

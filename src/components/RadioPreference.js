import React from 'react';

class RadioPreference extends React.Component {
  render() {
    return (
      <div className="radio-container">
        <div className="preference-name">
          <span>{this.props.preferenceValue.title}</span>
        </div>
        <div className="preference-radio">
          <input
            type="radio"
            name="preference"
            value={this.props.preferenceValue.gender}
            onChange={this.props.handleChange}>
          </input>
        </div>
      </div>
    )
  }
}

export default RadioPreference;

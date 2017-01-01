import 'Adjuster.css';

import React, {Component, PropTypes} from 'react';

class Adjuster extends Component {
  static propTypes = {
    enabled: PropTypes.bool.isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.number.isRequired
  }

  static defaultProps = {
    enabled: false,
    max: 100,
    min: 0,
    onChange: () => {}
  }

  render() {
    const {
      enabled,
      max,
      min,
      name,
      onChange,
      value
    } = this.props;

    return (
      <div className='adjuster'>
        <div className={`adjusterValue ${enabled ? '' : 'adjusterValueDisabled'}`}>
          <input className='adjusterValCheckbox'
            id={`adjuster${name}`}
            type='checkbox'
            name={name}
            checked={enabled}
            onChange={onChange} />

          <input className='adjusterValInput'
            aria-label={`${name} value`}
            type='number'
            name={`${name}Value`}
            min={min}
            max={max}
            value={value}
            onChange={onChange} />

          <input className='adjusterValRange'
            aria-label={`${name} value`}
            type='range'
            name={`${name}Value`}
            min={min}
            max={max}
            value={value}
            onChange={onChange} />
        </div>
        <label className='adjusterLabel'
          htmlFor={`adjuster${name}`}>
          {name}
        </label>
      </div>
    );
  }
}

export default Adjuster;

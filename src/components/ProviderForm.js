import React from 'react';

const ProviderForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <label></label>
      <input/>
        <button type="submit" value="submit">REGISTER</button>
      </form>
    </div>
  )
}

export default ProviderForm;
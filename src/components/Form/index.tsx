import React, { FormEvent, useState } from 'react';

import { Container } from './styles';

const Form: React.FC = () => {
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage('Thanks! Email received.');
  }

  return (
    <Container>
      <h2 data-aos="fade-down">
        Learn how others are reaching their audience easier than ever before.
      </h2>
      <form data-aos="fade-up" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="email" name="email" placeholder="Enter your email" />
          {message && <div>{message}</div>}
        </div>

        <button className="contained" type="submit">
          JOIN OUR LIST
        </button>
      </form>
    </Container>
  );
};

export default Form;

import React from 'react';
import { genFeedbackMessage } from '../helpers/helpers';

const Result = (props) => {
  return(
    <footer data-testid="result_footer">
      <h2>{ genFeedbackMessage(props.status) }</h2>
    </footer>
  );
}

export default Result;

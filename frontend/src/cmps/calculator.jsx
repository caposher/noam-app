import axios from 'axios';
import { useState } from 'react';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/calc';

export function Calculator() {
  const [input1, setInput1] = useState(0);
  const [operator, setOperator] = useState('add');
  const [input2, setInput2] = useState(0);
  const [answer, setAnswer] = useState();

  const handleInput = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    switch (inputName) {
      case 'input1':
        setInput1(+value);
        break;
      case 'input2':
        setInput2(+value);
        break;
      case 'operator':
        setOperator(value);
        break;
      default:
    }
  };

  const calc = (e) => {
    e.preventDefault();

    axios.post(BASE_URL, { input1, input2, operator }).then((res) => {
      setAnswer(res.data.result);
    });
  };

  return (
    <section className='calc-container'>
      <form onSubmit={calc}>
        <input type='number' name='input1' onChange={handleInput} value={input1} placeholder='enter a number' />
        <select name='operator' onChange={handleInput} value={operator}>
          <option value='add'>+</option>
          <option value='sub'>-</option>
          <option value='mul'>*</option>
          <option value='div'>/</option>
        </select>
        <input type='number' name='input2' onChange={handleInput} value={input2} placeholder='enter a number' />
        <input type='number' name='answer' value={answer} />
        <button>Calc</button>
      </form>
    </section>
  );
}

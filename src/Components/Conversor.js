import { useState } from 'react';
import ConversorToRoman from './ConversorToRoman';
import ConversorToArabic from './ConversorToArabic';
import styles from './Conversor.module.css';

function Conversor () {

    
  const [input, setInput] = useState()
  const [operator, setOperetor] = useState()

  async function Funcao (e) {
    e.preventDefault();

    let output = document.getElementById('output');

    if (operator === 'roman') {
      let result = await ConversorToRoman(input)
      return output.value = result
    }

    if (operator === 'arabic') {
        let result = await ConversorToArabic(input)
        return output.value = result
      }
  
    
  }

    return (
         <div className={styles.conversorContainer}>

            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Conversor de algarismos <br /> Romanos</h2>
              <label id='ifError' className={styles.ifError}>...</label>
            </div>
            
            <form onSubmit={Funcao}>
                <label>Insira aqui o numero</label>
                <input type="text" id="input" placeholder='...' onChange={e => setInput(e.target.value)}/>
                <button type='submit' onClick={e => setOperetor('roman')}>Calcular Romano</button>
                <button type='submit' onClick={e => setOperetor('arabic')}>Calcular Arabico</button>

                <div className={styles.result}>
                    <label>O seu resultado é</label>
                    <input type="text" id='output' placeholder='...' disabled />
                </div>
            </form>
         </div>
    );
};

export default Conversor;
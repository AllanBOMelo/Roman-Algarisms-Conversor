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
              <label id='ifError' className='ifError'>...</label>
            </div>
            
            <form onSubmit={Funcao} className={styles.form}>

                <div className={styles.inputValue}>
                  <input type="text" id="input" placeholder='Insira aqui o valor' autoComplete='off' onChange={e => setInput(e.target.value)}/>
                </div>
                
                <div className={styles.buttons}>
                  <button type='submit' onClick={e => setOperetor('roman')}>Calcular Romano</button>
                  <button type='submit' onClick={e => setOperetor('arabic')}>Calcular Arabico</button>
                </div>
                
                <div className={styles.result}>
                    <input type="text" id='output' placeholder='Resultado' disabled />
                </div>
            </form>
         </div>
    );
};

export default Conversor;
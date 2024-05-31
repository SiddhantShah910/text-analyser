import './Input.css';

export default function Input() {
    return (
      <div align="center">
        <h1>Type text to analyse:</h1>
        <textarea rows="7">Type Here</textarea><br/>
        <button type="button">Analyse</button>
        <button type="button">Reset</button>
      </div>
    );
  }
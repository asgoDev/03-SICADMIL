import '../styles/select.css'

function Select({id, value, setValue, options, title}) {

  const inputControl = (e) =>{
    let newValue = e.target.value
    if(!newValue) return
    setValue(newValue)
  }

  return (
    <select className={`complex-input__select ${!value && 'gray'}`} name={id} id={id} value={value} onChange={inputControl} title={title}>
      <option key={0} value="">Seleccione</option>
      {options.map((option, i) => <option key={i+1} value={option}>{option}</option>)}
    </select>
  )
}

export default Select
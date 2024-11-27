/* eslint-disable react/prop-types */

const TextInput = ({labelName, optional, required ,value, placeholder, clsName, onChange, disabled, defaultValue}) => {
  return (
    <>
       <div className={`textInput inputFieldBox ${clsName? clsName : ''}`}>
        <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p><span>{required}</span></label>
        <input disabled={disabled} onChange={onChange} type="text"value={value} defaultValue={defaultValue} placeholder={placeholder}/>
      </div>
    </>
  )
}

export default TextInput;

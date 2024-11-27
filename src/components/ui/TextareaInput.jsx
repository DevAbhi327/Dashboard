/* eslint-disable react/prop-types */
const TextareaInput = ({labelName, optional, value , placeholder, onChange}) => {
  return (
    <>
    <div className="textareaInput inputFieldBox">
      {labelName? <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p></label> : null}
        
        <textarea onChange={onChange} name="" id="" value={value} defaultValue={value} placeholder={placeholder}></textarea>
      </div>
 </>
  )
}

export default TextareaInput

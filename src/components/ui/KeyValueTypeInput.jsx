/* eslint-disable react/prop-types */
const KeyValueTypeInput = ({keyName, value}) => {
  return (
    <>
      <div className="KeyValueTypeInput inputField">
          <p className="key">{keyName}</p>
          <input type="text" defaultValue={value}/>
      </div>
    </>
  );
};

export default KeyValueTypeInput;

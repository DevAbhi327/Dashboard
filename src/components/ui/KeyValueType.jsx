/* eslint-disable react/prop-types */
const KeyValueType = ({keyName, value}) => {
  return (
    <>
      <div className="KeyValueType">
          <p className="key">{keyName}:</p>
          <p className="value">{value}</p>
      </div>
    </>
  );
};

export default KeyValueType;

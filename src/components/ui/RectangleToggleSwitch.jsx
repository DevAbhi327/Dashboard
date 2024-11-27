
// eslint-disable-next-line react/prop-types
const RectangleToggleSwitch = ({id}) => {
  return (
    <>
         <div className="toggleSwitch RectangleToggleSwitch">
            <span className="ss_switch">
              <input
                id={`switch-rounded-${id}`}
                // onClick={() => setPlanType(!planType)}
                type="checkbox"
              />
              <label htmlFor={`switch-rounded-${id}`}></label>
            </span>
          </div>
    </>
  )
}

export default RectangleToggleSwitch

import KeyValueType from "../ui/KeyValueType"

const MatrimonyGeneralDetails = () => {
  return (
    <>
<div className="MatrimonyGeneralDetails">
<div className="innerBox">
              <div className="boxHead">
                <h6 className="heading">General Details</h6>
              </div>
              <div className="boxBody">
                <div className="keyValues">
                  <KeyValueType keyName='Name' value='Rajat Pradhan'/>
                  <KeyValueType keyName='Email' value='prajat917@gmail.com'/>
                  <KeyValueType keyName='Phone' value='+91 7024393158'/>
                  <KeyValueType keyName='Age' value='23'/>
                  <KeyValueType keyName='Created By' value='Parents'/>
                  <KeyValueType keyName='Family Type' value='Joint'/>
                </div>
              </div>
            </div>
</div>
    </>
  )
}

export default MatrimonyGeneralDetails
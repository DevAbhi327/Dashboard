/* eslint-disable react/prop-types */

const TopInstructorCard = ({pic, name, designation, totalCourse, category}) => {
  return (
    <>
<div className="TopInstructorCard">
    <div className="pic"><img src={pic} alt="" /></div>
    <div className="txt">
        <h6>{name}</h6>
        <p>{designation}</p>
    </div>
    <div className="total">
        <h6>{totalCourse}</h6>
        <p>{category}</p>
    </div>
</div>
    </>
  )
}

export default TopInstructorCard
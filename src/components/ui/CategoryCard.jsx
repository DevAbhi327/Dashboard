/* eslint-disable react/prop-types */

const CategoryCard = ({iconTxt, name, totalCourse, totalClass}) => {
  return (
    <>
<div className="CategoryCard">
    <div className="iconTxt">{iconTxt}</div>
    <div className="txt">
        <h6>{name}</h6>
        <p>{totalCourse}</p>
    </div>
    <span className="total">{totalClass}</span>
</div>
    </>
  )
}

export default CategoryCard
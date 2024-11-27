import Img1 from "../../assets/matrimony/galleryImg1.png";
import Img2 from "../../assets/matrimony/galleryImg2.png";
import Img3 from "../../assets/matrimony/galleryImg3.png";
import Img4 from "../../assets/matrimony/galleryImg4.png";
import Img5 from "../../assets/matrimony/galleryImg5.png";
const MatrimonyUserGallery = () => {
  // dummy image data
  const imageData = [
    { img: Img1 },
    { img: Img2 },
    { img: Img3 },
    { img: Img4 },
    { img: Img5 },
  ];
  return (
    <>
      <div className="MatrimonyUserGallery">
        <div className="image_container">
          {/* full img */}
          <div className="imgBox full">
            {imageData?.map((e, i) => {
              if (i == 0) {
                return <img key={"full" + i} src={e.img} alt="" />;
              }
            })}
          </div>
          <div className="imgBox multi">
            {imageData?.map((e, i) => {
              if (i >= 1) {
                return <img key={"multi" + i} src={e.img} alt="" />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MatrimonyUserGallery;

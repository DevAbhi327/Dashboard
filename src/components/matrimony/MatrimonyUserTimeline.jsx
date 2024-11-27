import timelineImg from '../../assets/matrimony/timelineImg.png'
import MatrimonyTimelineCard from '../ui/MatrimonyTimelineCard';
const MatrimonyUserTimeline = () => {

  // timeline data 
  const timelineData = [
    {
      cardImg: timelineImg,
      title: 'Connection Sent',
      description:'Connection Sent to Prachi Sharma'
    },
    {
      cardImg: timelineImg,
      title: 'Connection Sent',
      description:'Connection Sent to Prachi Sharma'
    },
    {
      cardImg: timelineImg,
      title: 'Invitation received',
      description:'Connection Sent to Prachi Sharma'
    },
    {
      cardImg: timelineImg,
      title: 'Profile Visitor',
      description:'Connection Sent to Prachi Sharma'
    },
    {
      cardImg: timelineImg,
      title: 'Invitation received',
      description:'Connection Sent to Prachi Sharma'
    },
 
  ]
  
  return (
    <>
      <div className="MatrimonyUserTimeline">
      <div className="MatrimonyUserTimeline_inner">
        {
          timelineData?.map((e, i)=>{
            return <MatrimonyTimelineCard cardImg={e.cardImg} description={e.description} title={e.title} key={i} />
          })
        }
      </div>
        <div className="centerline"></div>
      </div>
    </>
  );
};

export default MatrimonyUserTimeline;

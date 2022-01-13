// @ts-ignore
import Fade from 'react-reveal/Fade'
import Section from '../Section';
import RoadmapSectionSwiper from '../RoadmapSectionSwiper';

const RoadmapSection = () => (
  <Fade>
    <Section topPadding className="roadmap relative pb-[1rem] pt-[3rem]">
      <div className="container space-y-6">
        <div className="pb-4 space-y-4 border-b roadmap-section-header">
          <h2 className="text-[2.8rem] text-center">
            Roadmap
          </h2>
          <p className="text-xl font-black text-center font-display">2022</p>
        </div>
        <RoadmapSectionSwiper
          slides={[
            {
              imgSrc: '/png/1.png',
              title: 'Q1',
              listItems: [
                'TX Mesh MVP',
                'TX Mesh industry partnerships & collaborations',
                'Conclusion of the seed round fundraising',
              ],
            },
            {
              imgSrc: '/png/2.png',
              title: 'Q2',
              listItems: [
                'TX Mesh private alpha',
                'Development of TX Mesh SDK and TX Mesh tool kits',
              ],
            },
            {
              imgSrc: '/png/3.png',
              title: 'Q3',
              listItems: [
                'TX Mesh public beta',
                'Launch of partnership campaigns to attract developers to build on TX Mesh',
              ],
            },
            {
              imgSrc: '/png/4.png',
              title: 'Q4',
              listItems: [
                'Launch of TX Mesh',
                'TX Token distribution',
                'Launch of TX Mesh development grants',
              ],
            },
          ]}
        />
      </div>
      <div className="hidden lg:block z-[-10] absolute h-[100%] top-[-10%] left-[-20%] lg:block h-[1000px] w-[1300px] bg-contain bg-center bg-no-repeat bg-gradient-four top-[-10%] left-[10%]"></div>
    </Section>

  </Fade>
);

export default RoadmapSection;

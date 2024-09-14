// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import InvestigationCard from './InvestigationsCard';
import SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css';

SwiperCore.use([Autoplay]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <InvestigationCard text='Thermal transport from micro to nanoscale structures. Phononics in low dimensional systems. Applications to thermal management.' image='image'/>
      </SwiperSlide>
      <SwiperSlide >
        <InvestigationCard text='Nanofluids and microfluidics. Applications to thermal management.' image='image'/>
      </SwiperSlide>
      <SwiperSlide >
        <InvestigationCard text='Transport phenomena of confined soft and active matter.  Applications to thermal management and bioremediation.' image='image'/>
      </SwiperSlide>
      <SwiperSlide >
        <InvestigationCard text='Modelling of intracellular dynamical processes.' image='image'/>
      </SwiperSlide>
      <SwiperSlide >
        <InvestigationCard text='Thermodynamics far from equilibrium and transport phenomena, in open classical and  quantum dissipative systems. Stochastic energetics.' image='image'/>
      </SwiperSlide>
      <SwiperSlide >
        <InvestigationCard text='Transport phenomena in big scale systems. Optimization and modeling of hydrological phenomena.' image='image'/>
      </SwiperSlide>
    </Swiper>
  );
};
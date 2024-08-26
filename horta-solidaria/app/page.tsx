import React from 'react'
import HortaSolidariaInformations from './site/home/informations'
import FullscreenImage from './site/home/fullScreenImage'
import Mission from './site/home/mission'
import Justify from './site/home/justify'
import Gallery from './site/home/gallery'
import FeatureDisplay from './site/home/feature'
import Timeline from './site/home/timeline'
import Team from './site/home/team'
import Video from './site/home/video'
import Sponsors from './site/home/sponsors'


const HomePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-300">
      <FullscreenImage imageUrl="/fullImage.jpg" />
      <HortaSolidariaInformations />
      <Mission />
      <Justify />
      <Gallery />
      <FeatureDisplay />
      <Timeline />
      <Team />
      <Video />
      <Sponsors />
    </div>
  )
}

export default HomePage

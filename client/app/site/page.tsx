import React from 'react'
import HortaSolidariaInformations from './home/informations'
import FullscreenImage from './home/fullScreenImage'
import Mission from './home/mission'
import Justify from './home/justify'
import Gallery from './home/gallery'
import FeatureDisplay from './home/feature'
import Timeline from './home/timeline'
import Team from './home/team'
import Video from './home/video'
import Sponsors from './home/sponsors'

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

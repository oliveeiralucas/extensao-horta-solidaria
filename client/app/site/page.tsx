import React from 'react'
import HortaSolidariaInformations from '../../components/site/home/informations'
import FullscreenImage from '../../components/site/home/fullScreenImage'
import Mission from '../../components/site/home/mission'
import Justify from '../../components/site/home/justify'
import Gallery from '../../components/site/home/gallery'
import FeatureDisplay from '../../components/site/home/feature'
import Timeline from '../../components/site/home/timeline'
import Team from '../../components/site/home/team'
import Video from '../../components/site/home/video'
import Sponsors from '../../components/site/home/sponsors'

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

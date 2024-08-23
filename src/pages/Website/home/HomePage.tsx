import React from 'react'

import FullscreenImage from '@/Pages/Website/home/FullScreenImage'
import Team from '@/Pages/Website/home/team/TeamDisplay'

import FeatureDisplay from './feature/FeatureDisplay'
import Gallery from './Gallery'
import HortaSolidariaInformations from './HortaSolidariaInformations'
import Justify from './Justify'
import Mission from './Mission'
import Sponsors from './Sponsors'
import Timeline from './timeline/Timeline'
import Video from './Video'

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

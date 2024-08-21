import React from 'react'

import FullscreenImage from '@/pages/home/components/FullScreenImage'
import Team from '@/pages/home/components/team/TeamDisplay'

import FeatureDisplay from './components/feature/FeatureDisplay'
import Gallery from './components/Gallery'
import HortaSolidariaInformations from './components/HortaSolidariaInformations'
import Justify from './components/Justify'
import Mission from './components/Mission'
import Sponsors from './components/Sponsors'
import Timeline from './components/timeline/Timeline'
import Video from './components/Video'

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

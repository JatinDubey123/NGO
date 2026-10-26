import FAQ from '../components/FAQ'
import Marquee from '../components/Marquee'
import {
  CTASection,
  Hero,
  ImpactBand,
  JourneySection,
  ProgramsPreview,
  StoriesSection,
  TransparencySection,
  WaysToGive,
} from '../components/sections'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee tone="marigold" text="Nourishment for every table" duration={30} />
      <ImpactBand />
      <ProgramsPreview tone="paper" limit={4} />
      <JourneySection tone="paper2" />
      <StoriesSection />
      <TransparencySection tone="paper" />
      <WaysToGive tone="paper2" />
      <FAQ />
      <CTASection />
    </>
  )
}

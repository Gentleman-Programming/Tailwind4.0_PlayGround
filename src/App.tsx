import './App.css'
import ColorScheme from './components/ColorScheme'
import ComponentWithContainerQueries from './components/ComponentWithContainerQueries'
import ComponentWithCustomProps from './components/ComponentWithCustomProps'
import ComponentWithVariants from './components/ComponentWithVariants'
import InsetShadowsAndRings from './components/InsetShadowsAndRings'
import LinearGradient from './components/LinearGradient'
import Transforms from './components/Transforms'

function App() {

  return (
    <>
      <ColorScheme />
      <ComponentWithCustomProps text="Hello World" color="text-secondary" />
      <ComponentWithVariants />
      <ComponentWithContainerQueries />
      <LinearGradient />
      <InsetShadowsAndRings />
      <Transforms />
    </>
  )
}

export default App

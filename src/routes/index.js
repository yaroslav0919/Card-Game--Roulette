import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Roulette from '../utils/roulette'

const device = Roulette.isMobile ? 'mobile' : 'desktop'

const Layout = React.lazy(() => import('../layouts/' + device))

const route = () =>
  <Suspense fallback={<div>Loading</div>}>
    <Routes>
      <Route path='/roulette' component={Layout} />
    </Routes>
  </Suspense>

export default route

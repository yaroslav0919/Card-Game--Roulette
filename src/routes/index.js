import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helper } from 'uicore'
import Roulette from '../utils/roulette'

const device = Roulette.isMobile ? 'mobile' : 'desktop'

const Layout = React.lazy(() => import('../layouts/' + device))
const Broadcast = React.lazy(() => import('../layouts/broadcast'))
const OBroadcast = React.lazy(() => import('../layouts/obroadcast'))

const route = () =>
  <Suspense fallback={<div>Loading</div>}>
    <Switch>
      <Route path='/roulette' component={Helper.getQueryParam('broadcast') ? (Helper.getQueryParam('orig') ? OBroadcast : Broadcast) : Layout} />
    </Switch>
  </Suspense>

export default route

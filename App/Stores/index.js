import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as SetUser } from './SetUser/Reducers'
import { reducer as Data } from './Data/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    address: SetUser,
    balances: Data,
  })

  return configureStore(rootReducer, rootSaga)
}

import { combineReducers } from 'redux'
import DashboarReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboarReducer,
    tab: TabReducer
})

export default rootReducer
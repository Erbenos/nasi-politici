import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { loadDetail } from 'store/detail/actions'
import {
  getBirthYear,
  getCurrentParty,
  getDeathYear,
  getDescription,
  getFullName,
  getPhotoUrl,
  isDetailLoading,
} from 'store/detail/selectors'

import Detail from './detail'
import { AppState } from 'store'

interface StateProps {
  birthYear: string
  deathYear: string
  currentParty: string
  description: string
  fullname: string
  isLoading: boolean
  photoUrl: string
}

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  birthYear: getBirthYear,
  deathYear: getDeathYear,
  currentParty: getCurrentParty,
  description: getDescription,
  fullname: getFullName,
  isLoading: isDetailLoading,
  photoUrl: getPhotoUrl,
})

export default connect(mapStateToProps, { loadDetail })(Detail)

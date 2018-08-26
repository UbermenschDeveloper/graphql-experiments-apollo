import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import injectSheet from '../../../utils/jss'

/**
 * Helper component to leave our components indipendent from their context
 * and leave them pure from styling point of view.
 *
 * For e.g. we don't need to add margins, or paddings to container
 * because this component must look good in ANY place (context) where it goes
 * rendered.
 */

const styles = {
  row: {
    margin: [20, 0],
    '&:first-child': {
      marginTop: 0,
    },
  },
  small: {
    marignTop: 10,
    marginBottom: 10,
  },
  big: {
    marginTop: 40,
    marginBottom: 40,
  },
}

class Row extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
    big: PropTypes.bool,
    hostRef: PropTypes.func, // Needed for react-pose
  }

  static defaultProps = {
    small: false,
    big: false,
    hostRef: () => {},
  }

  render() {
    const {children, classes, small, big, hostRef} = this.props
    const classNames = cn(
      classes.row,
      small && classes.small,
      big && classes.big,
    )
    return (
      <div className={classNames} ref={hostRef}>
        {children}
      </div>
    )
  }
}

export default injectSheet(styles)(Row)

import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>repoName: {this.props.params.repoName}</h2>
        <h3>userName: {this.props.params.userName}</h3>
      </div>
    )
  }
})
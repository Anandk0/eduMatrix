import React from 'react'
import { connect } from 'react-redux'

export const Faculty = (props) => {
  return (
    <div><h1>Faculty</h1></div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Faculty)
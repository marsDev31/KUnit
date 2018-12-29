import React, { Component } from 'react'
import FacebookProvider, { Comments } from 'react-facebook'

export default class Comment extends Component {
  render() {
    return (
      <FacebookProvider appId="536899426419954">
        <Comments
          href="https://wisticejent.github.io/KUnit/"
          num_posts="5"
          width="100%"
          style={{ width: '100%' }}
        />
      </FacebookProvider>
    )
  }
}

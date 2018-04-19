import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
 
export default class Comment extends Component {
  render() {
    return (
      //<FacebookProvider appId="536899426419954">
      <FacebookProvider appId="2157947631114614">
        <Comments href="https://wisticejent.github.io/KUnit/" num_posts="5" />
      </FacebookProvider>
    );
  }
}

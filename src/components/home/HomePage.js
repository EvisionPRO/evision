import React, { Component } from 'react';
import {Link} from 'react-router';
import Scrollchor from 'react-scrollchor';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
    this.IncrementNumber = this.IncrementNumber.bind(this);
    this.DecreaseNumber = this.DecreaseNumber.bind(this);
  }

  IncrementNumber() {
    const number = this.state.number + 1;
    this.setState({ number: number});
  }
  DecreaseNumber() {
    this.setState({ number: this.state.number - 1 });
  }

  render() {

    return (
      <div>
        <div className="video-header-wrapper">
          <video className="video-wrapper" autoPlay loop muted>
              <source src="https://s3.amazonaws.com/evisionpro/media/evision-video.mp4" type="video/mp4" />
          </video>

          <div className="video-content-wrapper">
            <p>Hello, my name is Jarek Sliz and I'am a</p>
            <h1>Front End Web Developer</h1>
            <p>creating MODERN and RESPONSIVE Web Applications</p>
          </div>
        </div>
        <div className="jumbotron">
          <h1>Here is my First Bookstore</h1>
          <p>Here is a few information about a new react and redux bookstore</p>
          <Scrollchor to="#section03">Sample</Scrollchor>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
        <div className="flexcontainer">
          <i className="btn btn-primary" onClick={this.DecreaseNumber}>-</i>
          <h3>{this.state.number}</h3>
          <i className="btn btn-primary" onClick={this.IncrementNumber}>+</i>
        </div>
        <div id="section03">
          <p>03 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada luctus tellus at consectetur. Cras ut sodales risus. Donec fermentum enim in leo tristique viverra. Phasellus vitae blandit est. Maecenas vulputate lacinia odio in rhoncus. Integer orci lacus, volutpat eu tristique ut, pretium vel arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut lacus interdum, accumsan elit non, volutpat urna. Sed bibendum, sem id lobortis accumsan, tellus risus tincidunt ligula, at rhoncus turpis nunc sit amet felis. Donec quis ornare felis. Vestibulum eget varius orci. Mauris in convallis sapien, quis semper orci. Sed mollis faucibus tempus. Suspendisse aliquam mollis sapien, at auctor quam vehicula vel. Sed ornare vulputate leo sit amet pellentesque. Donec bibendum et nisi vitae imperdiet.</p>

          <p>Mauris varius velit in neque vestibulum consequat. Sed consequat sodales arcu at volutpat. Nunc ornare arcu vel blandit tincidunt. Fusce libero diam, laoreet vel venenatis vitae, sollicitudin non nunc. Pellentesque et dolor pharetra, eleifend neque vel, finibus nulla. Vivamus sagittis velit eget posuere volutpat. Donec quam justo, rutrum quis rhoncus sit amet, mattis eu mi. Nulla facilisi. Nunc eros magna, lacinia a lorem a, aliquam lobortis ipsum. Proin sit amet sodales ante, vitae interdum risus. Nullam hendrerit leo nec maximus convallis.</p>

          <p>Cras ultrices, nunc non condimentum vehicula, urna purus tincidunt felis, iaculis sodales risus arcu mattis quam. Donec et nisl congue, iaculis leo vitae, commodo elit. Morbi et mattis magna, id egestas lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla tellus, aliquam at dui quis, venenatis ullamcorper mi. Pellentesque ut mi hendrerit, sagittis ante blandit, posuere nisl. Sed non mi nec lacus dignissim fringilla. Praesent ullamcorper vitae arcu elementum maximus. Etiam volutpat condimentum metus sed faucibus. Donec enim urna, pellentesque sit amet urna ut, sollicitudin facilisis erat. Vestibulum scelerisque non velit molestie imperdiet. Fusce consequat eros eget dolor pretium fringilla. Quisque pellentesque eget neque nec sodales. Sed sit amet auctor enim, sed sodales urna. Maecenas eu eleifend diam.</p>
        </div>
        <div id="section02">
          <p>02 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada luctus tellus at consectetur. Cras ut sodales risus. Donec fermentum enim in leo tristique viverra. Phasellus vitae blandit est. Maecenas vulputate lacinia odio in rhoncus. Integer orci lacus, volutpat eu tristique ut, pretium vel arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut lacus interdum, accumsan elit non, volutpat urna. Sed bibendum, sem id lobortis accumsan, tellus risus tincidunt ligula, at rhoncus turpis nunc sit amet felis. Donec quis ornare felis. Vestibulum eget varius orci. Mauris in convallis sapien, quis semper orci. Sed mollis faucibus tempus. Suspendisse aliquam mollis sapien, at auctor quam vehicula vel. Sed ornare vulputate leo sit amet pellentesque. Donec bibendum et nisi vitae imperdiet.</p>

          <p>Mauris varius velit in neque vestibulum consequat. Sed consequat sodales arcu at volutpat. Nunc ornare arcu vel blandit tincidunt. Fusce libero diam, laoreet vel venenatis vitae, sollicitudin non nunc. Pellentesque et dolor pharetra, eleifend neque vel, finibus nulla. Vivamus sagittis velit eget posuere volutpat. Donec quam justo, rutrum quis rhoncus sit amet, mattis eu mi. Nulla facilisi. Nunc eros magna, lacinia a lorem a, aliquam lobortis ipsum. Proin sit amet sodales ante, vitae interdum risus. Nullam hendrerit leo nec maximus convallis.</p>

          <p>Cras ultrices, nunc non condimentum vehicula, urna purus tincidunt felis, iaculis sodales risus arcu mattis quam. Donec et nisl congue, iaculis leo vitae, commodo elit. Morbi et mattis magna, id egestas lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla tellus, aliquam at dui quis, venenatis ullamcorper mi. Pellentesque ut mi hendrerit, sagittis ante blandit, posuere nisl. Sed non mi nec lacus dignissim fringilla. Praesent ullamcorper vitae arcu elementum maximus. Etiam volutpat condimentum metus sed faucibus. Donec enim urna, pellentesque sit amet urna ut, sollicitudin facilisis erat. Vestibulum scelerisque non velit molestie imperdiet. Fusce consequat eros eget dolor pretium fringilla. Quisque pellentesque eget neque nec sodales. Sed sit amet auctor enim, sed sodales urna. Maecenas eu eleifend diam.</p>
        </div>
        <div id="section01">
          <p>01 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada luctus tellus at consectetur. Cras ut sodales risus. Donec fermentum enim in leo tristique viverra. Phasellus vitae blandit est. Maecenas vulputate lacinia odio in rhoncus. Integer orci lacus, volutpat eu tristique ut, pretium vel arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut lacus interdum, accumsan elit non, volutpat urna. Sed bibendum, sem id lobortis accumsan, tellus risus tincidunt ligula, at rhoncus turpis nunc sit amet felis. Donec quis ornare felis. Vestibulum eget varius orci. Mauris in convallis sapien, quis semper orci. Sed mollis faucibus tempus. Suspendisse aliquam mollis sapien, at auctor quam vehicula vel. Sed ornare vulputate leo sit amet pellentesque. Donec bibendum et nisi vitae imperdiet.</p>

          <p>Mauris varius velit in neque vestibulum consequat. Sed consequat sodales arcu at volutpat. Nunc ornare arcu vel blandit tincidunt. Fusce libero diam, laoreet vel venenatis vitae, sollicitudin non nunc. Pellentesque et dolor pharetra, eleifend neque vel, finibus nulla. Vivamus sagittis velit eget posuere volutpat. Donec quam justo, rutrum quis rhoncus sit amet, mattis eu mi. Nulla facilisi. Nunc eros magna, lacinia a lorem a, aliquam lobortis ipsum. Proin sit amet sodales ante, vitae interdum risus. Nullam hendrerit leo nec maximus convallis.</p>

          <p>Cras ultrices, nunc non condimentum vehicula, urna purus tincidunt felis, iaculis sodales risus arcu mattis quam. Donec et nisl congue, iaculis leo vitae, commodo elit. Morbi et mattis magna, id egestas lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla tellus, aliquam at dui quis, venenatis ullamcorper mi. Pellentesque ut mi hendrerit, sagittis ante blandit, posuere nisl. Sed non mi nec lacus dignissim fringilla. Praesent ullamcorper vitae arcu elementum maximus. Etiam volutpat condimentum metus sed faucibus. Donec enim urna, pellentesque sit amet urna ut, sollicitudin facilisis erat. Vestibulum scelerisque non velit molestie imperdiet. Fusce consequat eros eget dolor pretium fringilla. Quisque pellentesque eget neque nec sodales. Sed sit amet auctor enim, sed sodales urna. Maecenas eu eleifend diam.</p>
        </div>
        <div id="se">
          <p>01 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada luctus tellus at consectetur. Cras ut sodales risus. Donec fermentum enim in leo tristique viverra. Phasellus vitae blandit est. Maecenas vulputate lacinia odio in rhoncus. Integer orci lacus, volutpat eu tristique ut, pretium vel arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut lacus interdum, accumsan elit non, volutpat urna. Sed bibendum, sem id lobortis accumsan, tellus risus tincidunt ligula, at rhoncus turpis nunc sit amet felis. Donec quis ornare felis. Vestibulum eget varius orci. Mauris in convallis sapien, quis semper orci. Sed mollis faucibus tempus. Suspendisse aliquam mollis sapien, at auctor quam vehicula vel. Sed ornare vulputate leo sit amet pellentesque. Donec bibendum et nisi vitae imperdiet.</p>
        </div>
        <div id="se">
          <p>01 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada luctus tellus at consectetur. Cras ut sodales risus. Donec fermentum enim in leo tristique viverra. Phasellus vitae blandit est. Maecenas vulputate lacinia odio in rhoncus. Integer orci lacus, volutpat eu tristique ut, pretium vel arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut lacus interdum, accumsan elit non, volutpat urna. Sed bibendum, sem id lobortis accumsan, tellus risus tincidunt ligula, at rhoncus turpis nunc sit amet felis. Donec quis ornare felis. Vestibulum eget varius orci. Mauris in convallis sapien, quis semper orci. Sed mollis faucibus tempus. Suspendisse aliquam mollis sapien, at auctor quam vehicula vel. Sed ornare vulputate leo sit amet pellentesque. Donec bibendum et nisi vitae imperdiet.</p>

          <p>Mauris varius velit in neque vestibulum consequat. Sed consequat sodales arcu at volutpat. Nunc ornare arcu vel blandit tincidunt. Fusce libero diam, laoreet vel venenatis vitae, sollicitudin non nunc. Pellentesque et dolor pharetra, eleifend neque vel, finibus nulla. Vivamus sagittis velit eget posuere volutpat. Donec quam justo, rutrum quis rhoncus sit amet, mattis eu mi. Nulla facilisi. Nunc eros magna, lacinia a lorem a, aliquam lobortis ipsum. Proin sit amet sodales ante, vitae interdum risus. Nullam hendrerit leo nec maximus convallis.</p>

          <p>Cras ultrices, nunc non condimentum vehicula, urna purus tincidunt felis, iaculis sodales risus arcu mattis quam. Donec et nisl congue, iaculis leo vitae, commodo elit. Morbi et mattis magna, id egestas lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla tellus, aliquam at dui quis, venenatis ullamcorper mi. Pellentesque ut mi hendrerit, sagittis ante blandit, posuere nisl. Sed non mi nec lacus dignissim fringilla. Praesent ullamcorper vitae arcu elementum maximus. Etiam volutpat condimentum metus sed faucibus. Donec enim urna, pellentesque sit amet urna ut, sollicitudin facilisis erat. Vestibulum scelerisque non velit molestie imperdiet. Fusce consequat eros eget dolor pretium fringilla. Quisque pellentesque eget neque nec sodales. Sed sit amet auctor enim, sed sodales urna. Maecenas eu eleifend diam.</p>
        </div>

      </div>
    );
  }
}


export default HomePage;

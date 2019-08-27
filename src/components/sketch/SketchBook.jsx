import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import { Image } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Sketch.css';
import SketchBox from './SketchBox';

export default class SketchBook extends Component {
  render() {
    const designURLS = ['pic1.jpg', 'pic2.jpg', 'pic1.jpg', 'pic2.jpg'];
    const designs = designURLS.map((design, i) => {
      return (

        <Image
          src={design}
          className='design-thumb'
          id={i}
          size='small'
          onClick={this.props.handleDesignModal}
        />
      )
    });

    return (
      <>
        <Fade left opposite when={this.props.showDesign} >

          <div className='design'>
            <h1>Sketch</h1>
            <ScrollableAnchor id={'design'}>
              <div className='design-header'>
                <p>I was asked to write instruction for my successor in previous job and I drew 20 pages instead.</p>
                <p className='enlarge'>(click to enlarge)</p>
              </div>
            </ScrollableAnchor>
            <div className='design-port'>
              <Fade left cascade when={this.props.showDesign} >

                {designs}
              </Fade>
            </div>
            <div className='design-footer'>
              <p>Music inspired.</p>
            </div>
          </div>
        </Fade>
        <SketchBox
          handleDesignModal={this.props.handleDesignModal}
          designModal={this.props.designModal}
        />
      </>
    )
  }
}


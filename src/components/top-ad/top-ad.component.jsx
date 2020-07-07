import React from 'react';
import './top-ad.styles.scss';

class TopAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isActive: true,
        }
    }
    hideAlert() {
        this.setState({
          isActive: false,
        });
      }
    render() {
        if (this.state.isActive) {
            return (
                <div className='banner'>
                        <h1 className='text-container'>Hello deja el show ome! </h1>
                   
                        <button type='button' className='button' onClick={() => this.hideAlert()}> X </button>
                        
                    </div>
                )

        }   return <div/>
        




    }
} 
export default TopAd;
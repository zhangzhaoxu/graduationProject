import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

class Frame extends Component {
    render () {
        return (
            <div>
                <section>
                    <Nav />
                </section>
                <section>
                    {this.props.children}
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Frame;
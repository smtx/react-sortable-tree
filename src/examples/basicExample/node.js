import React, { Component, PropTypes } from 'react';
import styles from './stylesheets/app.scss';
import ExternalItemWrapper from './../../external-item-wrapper';

class Node extends Component {
    render() {
        return (
            <div className={styles['new-node']}>{this.props.node.title}</div>);
    }
}

Node.propTypes = {
    node: PropTypes.object.isRequired,
};
export default ExternalItemWrapper('NEW_NODE')(Node);

import React, { PropTypes } from 'react';
import { PREFIX } from './../../constants';

import {
    loadSimple,
    loadComplex,
    loadSticky,
    loadColRenderer,
    loadTree,
    loadStress,
    loadBootstrap
} from './../../actions';

export const Navigation = (
  { grid, store }
) => {

    const className = `${PREFIX}navigation`;

    const simpleProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Simple'
    };

    const complexProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Complex'
    };

    const stickyProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Sticky'
    };

    const stressProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Stress'
    };

    const colRendererProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Column Renderer'
    };

    const treeProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Tree'
    };

    const bootstrapProps = {
        className: `${PREFIX}nav-link`,
        onClick: handleLinkClick.bind(null, store),
        children: 'Bootstrap'
    };

    return (
        <div { ...{ className } }>
            <ul>
                <li><a { ...simpleProps } /></li>
                <li><a { ...complexProps } /></li>
                <li><a { ...treeProps } /></li>
                <li><a { ...stressProps } /></li>
                <li><a { ...stickyProps } /></li>
                <li><a { ...bootstrapProps } /></li>
                <li><a { ...colRendererProps } /></li>
            </ul>
        </div>
        );
};

export const handleLinkClick = (store, e) => {
    e.preventDefault();

    const type = e.target.innerHTML;
    let func;

    switch (type) {
    case 'Simple':
        func = loadSimple;
        break;
    case 'Complex':
        func = loadComplex;
        break;
    case 'Sticky':
        func = loadSticky;
        break;
    case 'Column Renderer':
        func = loadColRenderer;
        break;
    case 'Tree':
        func = loadTree;
        break;
    case 'Stress':
        func = loadStress;
        break;
    case 'Bootstrap':
        func = loadBootstrap;
        break;

    default:
        func = () => ({
            type: 'GRID_UNDEFINED'
        });
    }

    history.pushState(
        {},
        type,
        `${location.protocol}//${location.host}/#${type.replace(/\s/g, '').toLowerCase()}`
    );

    store.dispatch(
        func()
    );
};

const { object } = PropTypes;

Navigation.propTypes = {
    store: object.isRequired
};

Navigation.defaultProps = {};

export default Navigation;
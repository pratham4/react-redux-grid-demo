import {
    LOAD_SIMPLE,
    LOAD_COMPLEX,
    LOAD_STICKY,
    LOAD_COL_RENDERER,
    LOAD_TREE,
    LOAD_STRESS,
    LOAD_BOOTSTRAP
} from './../constants/actionTypes';

export const loadSimple = () => {
    return {
        type: LOAD_SIMPLE
    };
};

export const loadComplex = () => {
    return {
        type: LOAD_COMPLEX
    };
};

export const loadSticky = () => {
    return {
        type: LOAD_STICKY
    };
};

export const loadTree = () => {
    return {
        type: LOAD_TREE
    };
};

export const loadColRenderer = () => {
    return {
        type: LOAD_COL_RENDERER
    };
};

export const loadStress = () => {
    return {
        type: LOAD_STRESS
    };
};

export const loadBootstrap = () => {
    return {
        type: LOAD_BOOTSTRAP
    };
};
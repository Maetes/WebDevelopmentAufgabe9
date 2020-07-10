//import nanoid from 'nanoid';
export const SWITCH_PAGE = 'SWITCH_PAGE';
export const LOAD_PAGE = 'LOAD_PAGE';

export const switchPage = (route, params, query, data) => {
  return {
    type: SWITCH_PAGE,
    page: route,
    params: params,
    query: query,
    data: data,
    route: route
  };
};

export const loadPage = stuff => {
  return {
    type: LOAD_PAGE,
    page: stuff
  };
};

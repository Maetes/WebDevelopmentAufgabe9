import { SWITCH_PAGE, LOAD_PAGE } from '../actions/actions';

async function files() {
  let files = await (await fetch('../content.json')).json();
  return await files;
}

const INITIAL_STATE = {
  content: files(),
  data: {},
  route: '',
  params: {},
  query: {},
  main: '',
  linkMain: '',
  linkOne: '',
  linkTwo: '',
  linkThree: '',
  selOne: '',
  selTwo: '',
  selThree: ''
};

export const reducer = async (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
      let dataFiles = await files();
      let back = {
        content: dataFiles,

        data: action.data,
        route: action.route,
        params: action.params,
        query: action.query,

        main: dataFiles[action.page]['content'],

        linkMain: dataFiles[action.page]['linkText'][0],
        linkOne: dataFiles[action.page]['linkText'][1],
        linkTwo: dataFiles[action.page]['linkText'][2],
        linkThree: dataFiles[action.page]['linkText'][3],

        selOne: dataFiles[action.page]['linkContent'][0],
        selTwo: dataFiles[action.page]['linkContent'][1],
        selThree: dataFiles[action.page]['linkContent'][2]
      };
      return back;
    case LOAD_PAGE:
      return {};
    default:
      return state;
  }
};

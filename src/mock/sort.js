import {SortType} from '../utils/const';


const sorts = {
  [SortType.DAY]: () => (0),
  [SortType.EVENT]: () => (0),
  [SortType.TIME]: () => (0),
  [SortType.PRICE]: () => (0),
  [SortType.OFFERS]: () => (0),
};

export const generateSorts = () => Object.keys(sorts);
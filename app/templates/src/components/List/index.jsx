
import Loadable from '../Loadable';

const List = Loadable({
    loader: () => import(/* webpackChunkName: "list" */ './List'),
});

export default List;

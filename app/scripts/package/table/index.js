import './style/checkbox.css';
import './style/tag.css';
import './style/table-column.css';
import './style/table.css';
import faTable from './src/table';
/* istanbul ignore next */
faTable.install = function(Vue) {
  Vue.component(faTable.name, faTable);
};

export default faTable;

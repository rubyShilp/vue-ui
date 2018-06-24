import './src/style/index.less';
import faTableColumn from './src/components/table-column.vue';
faTableColumn.install=function(Vue) {
    Vue.component('faTableColumn', faTableColumn);
};
export default faTableColumn;
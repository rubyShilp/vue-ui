import faTable from './src/table.vue';
import faTableThead from './src/table-thead/table-thead.vue';
export {faTable,faTableThead};
export default faTable;
export function install (Vue) {
    const components = {faTable,faTableThead};
    for (const name in components) {
      Vue.component(name, components[name])
    }
}
faTable.install = install;
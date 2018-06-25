import './directives/core.js';
import Message from './message/index.js';
import faTag from './tag/index.js';
import faCheckbox from './checkbox/index.js';
import faTooltip from './tooltip/index.js';
import faTable from './table/index.js';
import faTableColumn from './table-column/index.js';
import faCityPicker from './cityPicker/index.js';
import faDatePicker from './datePicker/index.js';
import faPage from './page/index.js';
const components={
    faTag,
    faCheckbox,
    faTooltip,
    faTable,
    faTableColumn,
    faCityPicker,
    faDatePicker,
    faPage
}
const install = function(Vue, opts = {}) {
    for (const name in components) {
        Vue.component(name, components[name])
    }
    Vue.prototype.$message = Message;
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
module.exports={
    version:'1.0.1',
    install,
    faTag,
    faCheckbox,
    faTooltip,
    faTable,
    faTableColumn,
    faCityPicker,
    faDatePicker,
    faPage
}
module.exports.default = module.exports;
import './styles/index.css';
import Message from './message/index.js';
import Loading from './loading/index.js';
import faInput from './input/index.js';
import faSelect from './select/index.js';
import faOption from './option/index.js';
import faTag from './tag/index.js';
import faCard from './card/index.js';
import faRadio from './radio/index.js';
import faRadioButton from './radio-button/index.js';
import faRadioGroup from './radio-group/index.js';
import faCheckbox from './checkbox/index.js';
import faTooltip from './tooltip/index.js';
import faTable from './table/index.js';
import faTableColumn from './table-column/index.js';
import faCityPicker from './cityPicker/index.js';
import faDatePicker from './datePicker/index.js';
import faPage from './page/index.js';
import faScrollbar from './scrollbar/index.js';
import faButton from './button/index.js';
import faUpload from './upload/index.js';
import faProgress from './progress/index.js';
import faTree from './tree/index.js';
const components={
    faTag,
    faInput,
    faSelect,
    faOption,
    faCard,
    faRadio,
    faRadioButton,
    faRadioGroup,
    faCheckbox,
    faTooltip,
    faTable,
    faTableColumn,
    faCityPicker,
    faDatePicker,
    faPage,
    faScrollbar,
    faButton,
    faUpload,
    faProgress,
    faTree
}
const install = function(Vue, opts = {}) {
    for (const name in components) {
        Vue.component(name, components[name])
    }
    Vue.prototype.$message = Message;
    Vue.prototype.$loading=Loading;
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
module.exports={
    version:'1.0.1',
    install,
    faInput,
    faSelect,
    faOption,
    faTag,
    faCard,
    faRadio,
    faRadioButton,
    faRadioGroup,
    faCheckbox,
    faTooltip,
    faTable,
    faTableColumn,
    faCityPicker,
    faDatePicker,
    faPage,
    faScrollbar,
    faButton,
    faUpload,
    faProgress,
    faTree
}
module.exports.default = module.exports;
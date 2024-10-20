
import { Icon } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=solid filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 64C24.2 64 9.9 73.3 3.5 87.7s-3.8 31.3 6.8 43L112 243.8 112 368c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-172.2 101.7-113c10.6-11.7 13.2-28.6 6.8-43S327.8 64 312 64L40 64zM352 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0zM320 256c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32zM416 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0z" />
    </Icon>
);

export default FilterList;
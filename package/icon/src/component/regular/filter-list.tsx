
import { Icon } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=regular filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M41.2 64C18.5 64 0 82.5 0 105.2c0 10.4 3.9 20.4 11 28.1l93 100.1 0 126c0 13.4 6.7 26 18 33.4l75.5 49.8c5.3 3.5 11.6 5.4 18 5.4c18 0 32.6-14.6 32.6-32.6l0-182 93-100.1c7.1-7.6 11-17.6 11-28.1C352 82.5 333.5 64 310.8 64L41.2 64zM145.6 207.7L56.8 112l238.5 0-88.8 95.7c-4.1 4.4-6.4 10.3-6.4 16.3l0 162.8-48-31.7L152 224c0-6.1-2.3-11.9-6.4-16.3zM344 392c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zM320 256c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0c-13.3 0-24 10.7-24 24zM408 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
    </Icon>
);

export default FilterList;
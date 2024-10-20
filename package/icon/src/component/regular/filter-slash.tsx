
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=regular filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L408.1 294.6 566.6 100c6.1-7.4 9.4-16.7 9.4-26.3c0-23-18.7-41.7-41.7-41.7l-429 0c-8.6 0-16.5 2.6-23.1 7.1L38.8 5.1zM134.4 80L521 80 370.3 265 134.4 80zM400 411.2l-48-37.8 0 41.9-64-50.8 0-41.5-48-37.8 0 83.2c0 12.2 5.6 23.7 15.1 31.3L347.6 473c5.7 4.5 12.8 7 20.1 7c17.8 0 32.3-14.5 32.3-32.3l0-36.5z" />
    </Icon>
);

export default FilterSlash;
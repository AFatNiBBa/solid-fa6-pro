
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=solid filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L406.6 293.4 567 97.3c9.8-12 11.8-28.5 5.2-42.5S551.5 32 536 32L104 32c-8.1 0-15.8 2.5-22.3 6.8L38.8 5.1zM384 398.5L256 297.7 256 400c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-49.5z" />
    </Icon>
);

export default FilterSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=sharp-thin filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM576 96l0-48 0-16-16 0L152.5 32l20.3 16L560 48l0 42.1L425.2 247.3l12.6 9.9L576 96zM368 385.6l0 91.1-96-84 0-82.9-16-12.6L256 400l112 98 16 14 0-21.3 0-92.5-16-12.6z" />
    </Icon>
);

export default FilterSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=sharp-thin filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 314.1l-3.9-4.5L16 90.1 16 48l480 0 0 42.1L307.9 309.6l-3.9 4.5 0 5.9 0 156.7-96-84 0-72.7 0-5.9zM0 96L192 320l0 80 112 98 16 14 0-21.3L320 320 512 96l0-48 0-16-16 0L16 32 0 32 0 48 0 96z" />
    </Icon>
);

export default Filter;
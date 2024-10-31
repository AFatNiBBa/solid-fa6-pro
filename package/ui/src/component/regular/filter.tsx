
import { Icon } from "../../index";

/**
 * A component that renders the `filter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=regular filter}
 * @preview ![filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/filter.svg)
 */
const Filter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 73.7C0 50.7 18.7 32 41.7 32l428.6 0c23 0 41.7 18.7 41.7 41.7c0 9.6-3.3 18.9-9.4 26.3L336 304.5l0 143.2c0 17.8-14.5 32.3-32.3 32.3c-7.3 0-14.4-2.5-20.1-7l-92.5-73.4c-9.6-7.6-15.1-19.1-15.1-31.3l0-63.7L9.4 100C3.3 92.6 0 83.3 0 73.7zM55 80L218.6 280.8c3.5 4.3 5.4 9.6 5.4 15.2l0 68.4 64 50.8L288 296c0-5.5 1.9-10.9 5.4-15.2L457 80 55 80z" />
    </Icon>
);

export default Filter;

import { Icon } from "../../index";

/**
 * A component that renders the `peace` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peace?s=regular peace}
 * @preview ![peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/peace.svg)
 */
const Peace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 462.6l0-156L111.3 405.4c32 31 74 51.9 120.7 57.2zM80.9 368.3L232 244.6l0-195.3C128.4 61.3 48 149.2 48 256c0 41.4 12.1 79.9 32.9 112.3zm319.8 37.1L280 306.6l0 156c46.7-5.4 88.7-26.2 120.7-57.2zm30.4-37.1C451.9 335.9 464 297.4 464 256c0-106.8-80.4-194.7-184-206.6l0 195.3L431.1 368.3zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default Peace;

import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=solid spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278 12.5c-12.3-11.7-31.7-11.7-44 0L168 75.1 40 196.3c-51.3 48.6-53.5 129.6-4.9 181s129.6 53.5 181 4.9l8-7.6 0 73.4-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-73.4 8 7.6c51.3 48.6 132.3 46.4 181-4.9s46.4-132.3-4.9-181L344 75.1 278 12.5z" />
    </Icon>
);

export default Spade;
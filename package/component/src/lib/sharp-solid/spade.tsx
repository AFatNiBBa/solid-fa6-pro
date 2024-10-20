
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=sharp-solid spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.1 222.9L96 160 256 0 416 160l62.9 62.9c21.2 21.2 33.1 50 33.1 80C512 365.3 461.3 416 398.9 416c-30 0-58.8-11.9-80-33.1L288 352l0 96 32 0 32 0 0 64-32 0-32 0-64 0-32 0-32 0 0-64 32 0 32 0 0-96-30.9 30.9c-21.2 21.2-50 33.1-80 33.1C50.7 416 0 365.3 0 302.9c0-30 11.9-58.8 33.1-80z" />
    </Icon>
);

export default Spade;
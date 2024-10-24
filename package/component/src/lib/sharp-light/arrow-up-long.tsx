
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=sharp-light arrow-up-long}
 * @preview ![arrow-up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-long.svg)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M203.3 11.3L192 0 180.7 11.3l-144 144L25.4 166.6 48 189.3l11.3-11.3L176 61.3 176 496l0 16 32 0 0-16 0-434.7L324.7 177.9 336 189.3l22.6-22.6-11.3-11.3-144-144z" />
    </Icon>
);

export default ArrowUpLong;
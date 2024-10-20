
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=sharp-light arrow-up-left}
 * @preview ![arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-left.svg)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 96L32 96l0 16 0 224 0 16 32 0 0-16 0-185.4L316.7 403.3 328 414.6 350.6 392l-11.3-11.3L86.6 128 272 128l16 0 0-32-16 0L48 96z" />
    </Icon>
);

export default ArrowUpLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `tent` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=sharp-thin tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16.1 512L0 512l1.5-16L32 160 288 0 544 176l30.5 320 1.5 16-16.1 0L16.1 512zM280 496l0-472.1L47.2 169.4 17.5 496 280 496zm16 0l130.6 0L296 255.5 296 496zm148.8 0l113.6 0L528.8 185 296 24.9 296 222 444.8 496z" />
    </Icon>
);

export default Tent;
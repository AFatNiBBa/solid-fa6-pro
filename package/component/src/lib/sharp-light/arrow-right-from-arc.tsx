
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-from-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-arc?s=sharp-light arrow-right-from-arc}
 * @preview ![arrow-right-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right-from-arc.svg)
 */
const ArrowRightFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32l16 0 0-32L256 0C114.6 0 0 114.6 0 256S114.6 512 256 512l16 0 0-32-16 0C132.3 480 32 379.7 32 256zM354.6 116l-12-10.6-21.3 23.9 12 10.6L445.9 240 176 240l-16 0 0 32 16 0 269.9 0L333.4 372l-12 10.6 21.3 23.9 12-10.6 144-128 13.5-12-13.5-12-144-128z" />
    </Icon>
);

export default ArrowRightFromArc;
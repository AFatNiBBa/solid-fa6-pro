
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-left-to-arc` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-arc?s=sharp-light arrow-left-to-arc}
 * @preview ![arrow-left-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-left-to-arc.svg)
 */
const ArrowLeftToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32l16 0 0-32L256 0C114.6 0 0 114.6 0 256S114.6 512 256 512l16 0 0-32-16 0C132.3 480 32 379.7 32 256zM309.4 116l-144 128-13.5 12 13.5 12 144 128 12 10.6 21.3-23.9-12-10.6L218.1 272 496 272l16 0 0-32-16 0-277.9 0L330.6 140l12-10.6-21.3-23.9-12 10.6z" />
    </Icon>
);

export default ArrowLeftToArc;
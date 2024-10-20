
import { Icon } from "../../index";

/**
 * A component that renders the `hands-holding` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding?s=sharp-light hands-holding}
 * @preview ![hands-holding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hands-holding.svg)
 */
const HandsHolding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 64l-16 0L16 64 0 64 0 80 0 384l0 6.6 4.7 4.7 104 104L120 510.6 142.6 488l-11.3-11.3L32 377.4 32 96l64 0 0 192 0 6.6 1.4 1.4 3.3 3.3 8 8 72 72s0 0 0 0l16 16L208 406.6 230.6 384l-11.3-11.3-16-16s0 0 0 0L142.6 296 176 262.6l128 128L304 496l0 16 32 0 0-16 0-105.4 128-128L497.4 296l-60.7 60.7L425.4 368l-4.7 4.7L409.4 384 432 406.6l11.3-11.3 4.7-4.7 11.3-11.3 72-72 8-8 3.3-3.3 1.4-1.4 0-6.6 0-192 64 0 0 281.4-99.3 99.3L497.4 488 520 510.6l11.3-11.3 104-104 4.7-4.7 0-6.6 0-304 0-16-16 0-96 0-16 0 0 16 0 185.4-36.7-36.7L464 217.4l-11.3 11.3L320 361.4 187.3 228.7 176 217.4l-11.3 11.3L128 265.4 128 80l0-16z" />
    </Icon>
);

export default HandsHolding;
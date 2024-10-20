
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=regular diamond-half-stroke}
 * @preview ![diamond-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diamond-half-stroke.svg)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464l0-416c2.6 0 5.2 1 7 2.9L461.1 249c1.9 1.9 2.9 4.4 2.9 7s-1 5.2-2.9 7L263 461.1c-1.9 1.9-4.4 2.9-7 2.9zM215 17L17 215C6.1 225.9 0 240.6 0 256s6.1 30.1 17 41L215 495c10.9 10.9 25.6 17 41 17s30.1-6.1 41-17L495 297c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L297 17C286.1 6.1 271.4 0 256 0s-30.1 6.1-41 17z" />
    </Icon>
);

export default DiamondHalfStroke;
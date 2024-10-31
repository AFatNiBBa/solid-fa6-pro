
import { Icon } from "../../index";

/**
 * A component that renders the `up-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=regular up-left}
 * @preview ![up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up-left.svg)
 */
const UpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 128l0 193.4c0 1.7 .8 3.2 2.1 4.2c2.1 1.6 5 1.4 6.9-.5L127 271c9.4-9.4 24.6-9.4 33.9 0L285.7 395.7c2.7 2.7 6.5 4.3 10.3 4.3s7.6-1.5 10.3-4.3l25.4-25.4c2.7-2.7 4.3-6.5 4.3-10.3s-1.5-7.6-4.3-10.3L207 225c-9.4-9.4-9.4-24.6 0-33.9L261.1 137c1.8-1.8 2.1-4.8 .5-6.9c-1-1.3-2.5-2.1-4.2-2.1L64 128zm-48-8c0-22.1 17.9-40 40-40l201.4 0c16.8 0 32.5 7.9 42.6 21.3c15.9 21.2 13.8 50.9-4.9 69.6L257.9 208 365.7 315.7C377.4 327.5 384 343.4 384 360s-6.6 32.5-18.3 44.3l-25.4 25.4C328.5 441.4 312.6 448 296 448s-32.5-6.6-44.3-18.3L144 321.9 106.9 359c-18.7 18.7-48.4 20.8-69.6 5C23.9 353.9 16 338.1 16 321.4L16 120z" />
    </Icon>
);

export default UpLeft;
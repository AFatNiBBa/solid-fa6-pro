
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=regular up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 128l0 193.4c0 1.7-.8 3.2-2.1 4.2c-2.1 1.6-5 1.4-6.9-.5L257 271c-9.4-9.4-24.6-9.4-33.9 0L98.3 395.7c-2.7 2.7-6.5 4.3-10.3 4.3s-7.6-1.5-10.3-4.3L52.3 370.3c-2.7-2.7-4.3-6.5-4.3-10.3s1.5-7.6 4.3-10.3L177 225c9.4-9.4 9.4-24.6 0-33.9L122.9 137c-1.8-1.8-2.1-4.8-.5-6.9c1-1.3 2.5-2.1 4.2-2.1L320 128zm48-8c0-22.1-17.9-40-40-40L126.6 80c-16.8 0-32.5 7.9-42.6 21.3c-15.9 21.2-13.8 50.9 4.9 69.6L126.1 208 18.3 315.7C6.6 327.5 0 343.4 0 360s6.6 32.5 18.3 44.3l25.4 25.4C55.5 441.4 71.4 448 88 448s32.5-6.6 44.3-18.3L240 321.9 277.1 359c18.7 18.7 48.4 20.8 69.6 5c13.4-10.1 21.3-25.8 21.3-42.6L368 120z" />
    </Icon>
);

export default UpRight;
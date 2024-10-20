
import { Icon } from "../../index";

/**
 * A component that renders the `ampersand` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ampersand?s=sharp-regular ampersand}
 * @preview ![ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ampersand.svg)
 */
const Ampersand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M104 32L80 32l0 24 0 74c0 25.2 9.1 49.5 25.7 68.5L145.6 244 76.4 292.5C48.6 311.9 32 343.7 32 377.7L32 456l0 24 24 0 200 0 13 0 7.1-10.9 28.4-43.4L351.9 480l63.8 0-2.4-2.8L331.8 384l80.3-122.9-40.2-26.3-73 111.6-82-93.8 58.7-41.1c27.8-19.5 44.4-51.3 44.4-85.2L320 56l0-24-24 0L104 32zM248.1 172.2l-63 44.1-43.3-49.5C132.9 156.6 128 143.5 128 130l0-50 144 0 0 46.3c0 18.3-8.9 35.4-23.9 45.9zM103.9 331.8l73.5-51.4 94.3 107.8L243 432 80 432l0-54.3c0-18.3 8.9-35.4 23.9-45.9z" />
    </Icon>
);

export default Ampersand;
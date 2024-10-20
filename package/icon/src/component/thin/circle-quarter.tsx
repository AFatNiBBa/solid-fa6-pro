
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=thin circle-quarter}
 * @preview ![circle-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-quarter.svg)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.8 226C31.4 117.5 117.5 31.4 226 17.8c6.7-.8 14 4.7 14 14.1l0 192c0 8.8-7.2 16-16 16L32 240c-9.4 0-15-7.3-14.1-14zM2 224.1C-.2 241.6 14.3 256 32 256l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.4-32.2-31.9-30C108.2 16.4 16.4 108.2 2 224.1z" />
    </Icon>
);

export default CircleQuarter;

import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=light down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M72 384c-4.4 0-8-3.6-8-8l0-201.4c0-3.7 3-6.6 6.6-6.6c1.8 0 3.4 .7 4.7 1.9l61.4 61.4c6.2 6.2 16.4 6.2 22.6 0L272 118.6c4.2-4.2 10-6.6 16-6.6s11.8 2.4 16 6.6L329.4 144c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16L216.7 288.7c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l61.4 61.4c1.2 1.2 1.9 2.9 1.9 4.7c0 3.7-3 6.6-6.6 6.6L72 384zm-40-8c0 22.1 17.9 40 40 40l201.4 0c21.3 0 38.6-17.3 38.6-38.6c0-10.2-4.1-20.1-11.3-27.3L250.6 300 352 198.6c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6L326.6 96C316.4 85.8 302.5 80 288 80s-28.4 5.8-38.6 16L148 197.4 97.9 147.3C90.7 140.1 80.9 136 70.6 136C49.3 136 32 153.3 32 174.6L32 376z" />
    </Icon>
);

export default DownLeft;
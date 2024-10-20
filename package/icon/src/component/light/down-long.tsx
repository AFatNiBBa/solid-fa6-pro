
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=light down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M88 352l-49.3 0c-3.7 0-6.7 3-6.7 6.7c0 1.9 .8 3.7 2.2 5L160 476.2 285.8 363.7c1.4-1.3 2.2-3.1 2.2-5c0-3.7-3-6.7-6.7-6.7L232 352c-17.7 0-32-14.3-32-32l0-272c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16l0 272c0 17.7-14.3 32-32 32zm86 154.7c-3.8 3.4-8.8 5.3-14 5.3s-10.1-1.9-14-5.3L12.9 387.5C4.7 380.2 0 369.7 0 358.7C0 337.3 17.3 320 38.7 320L56 320l32 0 0-32L88 48c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 240 0 32 32 0 17.3 0c21.4 0 38.7 17.3 38.7 38.7c0 11-4.7 21.5-12.9 28.8L174 506.7z" />
    </Icon>
);

export default DownLong;

import { Icon } from "../../index";

/**
 * A component that renders the `mustache` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mustache?s=sharp-regular mustache}
 * @preview ![mustache](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mustache.svg)
 */
const Mustache: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M182.8 112l9.2 0 80 0 8.7 0 6.7 5.6L320 144.8l32.6-27.2 6.7-5.6 8.7 0 80 0 9.2 0 6.8 6.2 68.3 61.5 73.7-33.5L640 130.7l0 37.3 0 34s0 0 0 0c0 109.4-88.6 198-198 198c-42.8 0-84.5-13.9-118.8-39.6L320 358l-3.2 2.4C282.5 386.1 240.8 400 198 400C88.6 400 0 311.4 0 202c0 0 0 0 0 0l0-34 0-37.3 33.9 15.4 73.7 33.5 68.3-61.5 6.8-6.2zm18.4 48l-73.2 65.8-11.7 10.5-14.3-6.5L48 205.3C49.8 286.6 116.3 352 198 352c32.5 0 64-10.5 90-30l17.6-13.2L320 298l14.4 10.8L352 322c26 19.5 57.5 30 90 30c81.7 0 148.2-65.4 150-146.7l-54 24.6-14.3 6.5-11.7-10.5L438.8 160l-62.1 0-41.3 34.4L320 207.2l-15.4-12.8L263.3 160l-62.1 0z" />
    </Icon>
);

export default Mustache;
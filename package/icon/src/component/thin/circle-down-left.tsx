
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-left?s=thin circle-down-left}
 * @preview ![circle-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-down-left.svg)
 */
const CircleDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM160 344c0 4.4 3.6 8 8 8l127 0c5 0 9-4 9-9c0-2.4-.9-4.7-2.6-6.3l-35-35c-3.1-3.1-3.1-8.2 0-11.3L348.7 208c2.1-2.1 3.3-5 3.3-8s-1.2-5.9-3.3-8L320 163.3c-2.1-2.1-5-3.3-8-3.3s-5.9 1.2-8 3.3l-82.3 82.3c-3.1 3.1-8.2 3.1-11.3 0l-35-35c-1.7-1.7-4-2.6-6.3-2.6c-5 0-9 4-9 9l0 127zm8 24c-13.3 0-24-10.7-24-24l0-127c0-13.8 11.2-25 25-25c6.6 0 13 2.6 17.7 7.3L216 228.7 292.7 152c5.1-5.1 12.1-8 19.3-8s14.2 2.9 19.3 8L360 180.7c5.1 5.1 8 12.1 8 19.3s-2.9 14.2-8 19.3L283.3 296l29.4 29.4c4.7 4.7 7.3 11 7.3 17.7c0 13.8-11.2 25-25 25l-127 0z" />
    </Icon>
);

export default CircleDownLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=thin circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 1 0-480 240 240 0 1 1 0 480zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm96 344c0 4.4-3.6 8-8 8l-127 0c-5 0-9-4-9-9c0-2.4 .9-4.7 2.6-6.3l35-35c3.1-3.1 3.1-8.2 0-11.3L163.3 208c-2.1-2.1-3.3-5-3.3-8s1.2-5.9 3.3-8L192 163.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l82.3 82.3c3.1 3.1 8.2 3.1 11.3 0l35-35c1.7-1.7 4-2.6 6.3-2.6c5 0 9 4 9 9l0 127zm-8 24c13.3 0 24-10.7 24-24l0-127c0-13.8-11.2-25-25-25c-6.6 0-13 2.6-17.7 7.3L296 228.7 219.3 152c-5.1-5.1-12.1-8-19.3-8s-14.2 2.9-19.3 8L152 180.7c-5.1 5.1-8 12.1-8 19.3s2.9 14.2 8 19.3L228.7 296l-29.4 29.4c-4.7 4.7-7.3 11-7.3 17.7c0 13.8 11.2 25 25 25l127 0z" />
    </Icon>
);

export default CircleDownRight;
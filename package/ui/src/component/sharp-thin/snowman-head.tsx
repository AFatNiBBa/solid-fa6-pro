
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=sharp-thin snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 16l288 0 0 160 16 0 0-160 0-16L368 0 80 0 64 0l0 16 0 160 16 0L80 16zM368 224l5.9 0c26.4 32.9 42.1 74.6 42.1 120c0 61.8-29.2 116.9-74.7 152l-234.6 0C61.2 460.9 32 405.8 32 344c0-45.4 15.8-87.1 42.1-120l5.9 0 288 0zM8 208l-8 0 0 16 8 0 46.1 0C30.1 257.9 16 299.3 16 344c0 69 33.6 130.2 85.3 168l245.3 0c51.7-37.8 85.3-99 85.3-168c0-44.7-14.1-86.1-38.1-120l46.1 0 8 0 0-16-8 0-56 0-16 0L80 208l-16 0L8 208zM144 320a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-97.2 16C197 320 176 341 176 366.8c0 7.3 1.7 14.4 4.9 20.9l35.9 71.8 7.2 14.3 7.2-14.3 35.9-71.8c3.3-6.5 4.9-13.7 4.9-20.9c0-25.9-21-46.8-46.8-46.8l-2.3 0zM192 366.8c0-17 13.8-30.8 30.8-30.8l2.3 0c17 0 30.8 13.8 30.8 30.8c0 4.8-1.1 9.5-3.3 13.8L224 438.1l-28.7-57.5c-2.1-4.3-3.3-9-3.3-13.8z" />
    </Icon>
);

export default SnowmanHead;
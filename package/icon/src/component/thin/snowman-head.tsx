
import { Icon } from "../../index";

/**
 * A component that renders the `snowman-head` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=thin snowman-head}
 * @preview ![snowman-head](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/snowman-head.svg)
 */
const SnowmanHead: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l192 0c26.5 0 48 21.5 48 48l0 112 16 0 0-112c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 112 16 0L80 64c0-26.5 21.5-48 48-48zM368 224l5.9 0c26.4 32.9 42.1 74.6 42.1 120c0 56.8-24.6 107.8-63.8 142.9c-6.6 5.9-15.9 9.1-26.4 9.1l-203.5 0c-10.5 0-19.9-3.2-26.4-9.1C56.6 451.8 32 400.8 32 344c0-45.4 15.8-87.1 42.1-120l5.9 0 288 0zM8 208c-4.4 0-8 3.6-8 8s3.6 8 8 8l46.1 0C30.1 257.9 16 299.3 16 344c0 61.5 26.7 116.8 69.1 154.8c10.1 9.1 23.6 13.2 37.1 13.2l203.5 0c13.6 0 27-4.1 37.1-13.2C405.3 460.8 432 405.5 432 344c0-44.7-14.1-86.1-38.1-120l46.1 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0-16 0L80 208l-16 0L8 208zM144 320a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-97.2 16C197 320 176 341 176 366.8c0 7.3 1.7 14.4 4.9 20.9l35.9 71.8c1.4 2.7 4.1 4.4 7.2 4.4s5.8-1.7 7.2-4.4l35.9-71.8c3.3-6.5 4.9-13.7 4.9-20.9c0-25.9-21-46.8-46.8-46.8l-2.3 0zM192 366.8c0-17 13.8-30.8 30.8-30.8l2.3 0c17 0 30.8 13.8 30.8 30.8c0 4.8-1.1 9.5-3.3 13.8L224 438.1l-28.7-57.5c-2.1-4.3-3.3-9-3.3-13.8z" />
    </Icon>
);

export default SnowmanHead;
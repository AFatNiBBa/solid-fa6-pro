
import { Icon } from "../../index";

/**
 * A component that renders the `bagel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bagel?s=sharp-solid bagel}
 * @preview ![bagel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bagel.svg)
 */
const Bagel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 208c0 114.9-93.1 208-208 208c-3.9 0-7.7-.1-11.5-.3c5.7-10.8 10.6-22.1 14.6-33.8L478.8 352l56.7-1.6 19-53.4 44.9-34.6-16-54.4 16-54.4L554.5 119l-19-53.4L478.8 64 432 32 385.2 64l-56.7 1.6-9.2 25.7c-14.4-7.6-29.7-13.7-45.7-18.3C311.8 28.4 368.6 0 432 0C546.9 0 640 93.1 640 208zM396.1 155c10.2-6.9 22.6-11 35.9-11c35.3 0 64 28.7 64 64c0 30.6-21.5 56.3-50.3 62.5c-6-43.3-23.6-82.9-49.5-115.6zM0 304a208 208 0 1 1 416 0A208 208 0 1 1 0 304zm256 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM120 208l24 24 24-24-24-24-24 24zM80 296l24-24L80 248 56 272l24 24zm32 128l24-24-24-24L88 400l24 24zM304 264l24-24-24-24-24 24 24 24zM216 432l24 24 24-24-24-24-24 24zm88-8l24-24-24-24-24 24 24 24z" />
    </Icon>
);

export default Bagel;
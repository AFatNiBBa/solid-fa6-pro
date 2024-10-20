
import { Icon } from "../../index";

/**
 * A component that renders the `dolphin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolphin?s=sharp-regular dolphin}
 * @preview ![dolphin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dolphin.svg)
 */
const Dolphin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 160C80 98.1 130.1 48 192 48l30.3 0c42.2 0 81.9 10.8 116.4 29.8l8.6 4.7 9.4-2.6L420.6 62l-21.2 39.3-8 14.8 11.2 12.6c38.2 42.8 61.4 99.1 61.4 160.9c0 31.3-12.2 59.8-32 81c0-.9 0-1.8 0-2.6l0-8c0-48.6-39.4-88-88-88l-16 0-24 0 0 24 0 20.3-38.3-37.5-7-6.8-9.8 0L216 272l-24 0L56 272l-8 0 0-8 0-16 0-4.5 3.9-2.3 24.4-14.6 16.9-10.1-6.7-18.5C82.3 186 80 173.3 80 160zM384 368c0 22.1-17.9 40-40 40l-105.6 0L216 352l-88 0 32 80-32 80 88 0 22.4-56L344 456l1.7 0C437.5 456 512 381.5 512 289.7c0-68-23.4-130.5-62.6-179.9l35.8-66.4L496 23.2 476.3 11.4l-8-4.8-8.9-5.3-10 2.8L353 31.1C313.7 11.2 269.3 0 222.3 0L192 0C103.6 0 32 71.6 32 160c0 11.9 1.3 23.6 3.8 34.8L27.2 200l-15.5 9.3L0 216.3l0 13.6L0 248l0 16 0 32 0 24 24 0 32 0 136 0 24 0 23.1 0 42.1 41.2 7 6.8 9.8 0 30 0 24 0 0-24 0-23.2c18.3 3.7 32 19.8 32 39.2l0 8zM184 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Dolphin;

import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=sharp-light share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M373.2 65.8L361.4 55 383 31.4l11.8 10.8 168 154L575.7 208l-12.9 11.8-168 154L383 384.6 361.4 361l11.8-10.8L528.3 208 373.2 65.8zM128 480s-27-10.1-56.2-33.4C37.5 419.1 0 373.2 0 304c0-97.2 78.8-176 176-176l48 0 32 0 0-32 0-32 0-32 32 0L456.3 186.3 480 208l-23.7 21.7L288 384l-32 0 0-32 0-32 0-32-32 0-16 0c-61.9 0-112 50.1-112 112c0 9.9 1.3 19 3.5 27.4C107.8 459.8 128 480 128 480zM32 304c0 38.2 13.9 67.8 32.1 90.3C67.1 317.4 130.4 256 208 256l48 0 32 0 0 32 0 52.6L432.6 208 288 75.4l0 52.6 0 32-32 0-80 0C96.5 160 32 224.5 32 304z" />
    </Icon>
);

export default ShareAll;
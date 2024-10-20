
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=sharp-regular screwdriver-wrench}
 * @preview ![screwdriver-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/screwdriver-wrench.svg)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.9 366.1L160.4 239.6l33.9 33.9L67.9 400 112 444.1l95.4-95.4 17.9 17.9 16 16-95.4 95.4L112 512 78.1 478.1 33.9 433.9 0 400l33.9-33.9zM224 144.8L224 96l0-16-7.3-5.5C245.1 29.7 295.1 0 352 0c13.5 0 26.7 1.7 39.3 4.9c17 4.3 33 11.3 47.3 20.6L403.5 60.5 352 112l0 48 48 0 51.5-51.5 35.1-35.1c9.3 14.4 16.3 30.3 20.6 47.3c3.2 12.6 4.9 25.7 4.9 39.3c0 57.2-30 107.3-75.1 135.6l-35.2-35.2c35.8-17.8 60.8-54.1 62.3-96.5l-30 30L419.9 208 400 208l-48 0-48 0 0-48 0-48 0-19.9 14.1-14.1 30-30C288 50.1 240 99.5 240 160l0 .8-16-16zM287 321l-129-129L96 192 0 64 64 0 192 96l0 62.1L321 287l31-31L512 416l-96 96L256 352l31-31z" />
    </Icon>
);

export default ScrewdriverWrench;

import { Icon } from "../../index";

/**
 * A component that renders the `fill-drip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill-drip?s=sharp-light fill-drip}
 * @preview ![fill-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fill-drip.svg)
 */
const FillDrip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 272l22.6 22.6L217.4 489.4 240 512l22.6-22.6L489.4 262.6 512 240l-22.6-22.6L294.6 22.6 272 0 249.4 22.6l-86.1 86.1-96-96L56 1.4 33.4 24 44.7 35.3l96 96L22.6 249.4 0 272zm244.7-36.7L256 246.6 278.6 224l-11.3-11.3-81.4-81.4L272 45.3 466.7 240l-48 48L61.3 288l-16-16L163.3 153.9l81.4 81.4zM93.3 320l293.5 0L240 466.7 93.3 320zM484.1 433.3L512 384.5l27.9 48.8c2.7 4.7 4.1 10.1 4.1 15.5c0 17.2-14 31.2-31.2 31.2l-1.6 0C494 480 480 466 480 448.8c0-5.4 1.4-10.8 4.1-15.5zm-27.8-15.9c-5.5 9.6-8.3 20.4-8.3 31.4c0 34.9 28.3 63.2 63.2 63.2l1.6 0c34.9 0 63.2-28.3 63.2-63.2c0-11-2.9-21.8-8.3-31.4l-37.2-65.2L512 320l-18.4 32.2-37.2 65.2z" />
    </Icon>
);

export default FillDrip;
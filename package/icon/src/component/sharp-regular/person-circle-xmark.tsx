
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-xmark?s=sharp-regular person-circle-xmark}
 * @preview ![person-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-circle-xmark.svg)
 */
const PersonCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM94.8 128l14.1 0 102.2 0 14.1 0 6.9 12.4 64.1 115.7c-11.8 14.3-21.4 30.5-28.2 48.1l-2.5-4.6L224 224.9 224 488l0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-263.1L54.6 299.6 43 320.6 1 297.4l11.6-21 75.3-136L94.8 128zM144 304l32 0 0-128-32 0 0 128zm288-80a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm59.3 107.3L502.6 320 480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7z" />
    </Icon>
);

export default PersonCircleXmark;

import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=sharp-light place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 176l-64 48 0 256-32 0-96 0 0-125.9 96-57.6 0-37.3L0 336 0 480l0 32 32 0 128 0s0 0 0 0l32 0 64 0 32 0 64 0 32 0 64 0 32 0s0 0 0 0l128 0 32 0 0-32 0-144L512 259.2l0 37.3 96 57.6L608 480l-96 0-32 0 0-256-64-48 0-80L342.6 22.6 320 0 297.4 22.6 224 96l0 80zM448 480l-64 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-64 0 0-240 51.2-38.4L256 192l0-16 0-66.7 64-64 64 64 0 66.7 0 16 12.8 9.6L448 240l0 240zm-96 0l-64 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96z" />
    </Icon>
);

export default PlaceOfWorship;
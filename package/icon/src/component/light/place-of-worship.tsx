
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=light place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c4.2 0 8.3 1.7 11.3 4.7L406.6 80c6 6 9.4 14.1 9.4 22.6l0 89.3L457 217c14.3 8.7 23 24.2 23 41L480 480l96 0c17.7 0 32-14.3 32-32l0-69.9c0-10.9-5.5-21-14.6-26.9L512 298.6l0-38.1 98.8 63.9c18.2 11.8 29.2 32 29.2 53.7l0 69.9c0 35.3-28.7 64-64 64l-160 0s0 0 0 0l-32 0-32 0-64 0-32 0-32 0s0 0 0 0L64 512c-35.3 0-64-28.7-64-64l0-69.9c0-21.7 11-41.9 29.2-53.7L128 260.5l0 38.1L46.6 351.2c-9.1 5.9-14.6 16-14.6 26.9L32 448c0 17.7 14.3 32 32 32l96 0 0-222.1c0-16.7 8.7-32.2 23-41l41-25.1 0-89.3c0-8.5 3.4-16.6 9.4-22.6L308.7 4.7c3-3 7.1-4.7 11.3-4.7zM448 257.9c0-5.6-2.9-10.7-7.7-13.7l-48.7-29.8c-4.8-2.9-7.7-8.1-7.7-13.7l0-98.3-64-64-64 64 0 98.3c0 5.6-2.9 10.7-7.7 13.7l-48.7 29.8c-4.8 2.9-7.7 8.1-7.7 13.7L192 480l64 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 64 0 0-222.1zM352 480l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96 64 0z" />
    </Icon>
);

export default PlaceOfWorship;
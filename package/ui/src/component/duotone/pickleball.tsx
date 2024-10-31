
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pickleball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickleball?s=duotone pickleball}
 * @preview ![pickleball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pickleball.svg)
 */
const Pickleball: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 384a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm64-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M386.3 28c-37.5-37.4-98.4-37.4-136 0L84.9 193c-18.4 18.3-23.8 45.8-13.9 69.7l24.2 57.9c10 23.9 4.5 51.5-13.9 69.8L27.8 443.8c-15.6 15.6-15.7 40.9 0 56.5s41 15.6 56.7 0l53.8-53.6c18.3-18.2 45.7-23.7 69.6-13.9l56.7 23.2c8.7 3.6 17.9 5.1 26.9 4.7C279.1 437.9 272 411.8 272 384c0-3.3 .1-6.5 .3-9.8L133.1 235.5c-6.3-6.2-6.3-16.4 0-22.6s16.4-6.3 22.6 0L279.3 336.1C299.7 271.1 360.3 224 432 224c32.1 0 62 9.4 87 25.7c16.7-35.5 10.3-79.1-19.1-108.4L386.3 28z" />
    </Icon>
);

export default Pickleball;
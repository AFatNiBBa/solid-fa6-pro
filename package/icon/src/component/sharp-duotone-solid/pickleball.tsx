
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pickleball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickleball?s=sharp-duotone-solid pickleball}
 * @preview ![pickleball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pickleball.svg)
 */
const Pickleball: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 384a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm64-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm16-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M528 240L288 0 48 240 96 368 16 448l64 64 80-80 128 48 9.4-9.4c-16.1-25-25.4-54.7-25.4-86.6c0-3.3 .1-6.5 .3-9.8L133.1 235.5l-11.3-11.3 22.6-22.7 11.3 11.3L279.3 336.1C299.7 271.1 360.3 224 432 224c31.9 0 61.6 9.3 86.6 25.4L528 240z" />
    </Icon>
);

export default Pickleball;
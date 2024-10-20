
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-mask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-mask?s=sharp-duotone-solid face-mask}
 * @preview ![face-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-mask.svg)
 */
const FaceMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 256.1c0 46.6 12.5 90.3 34.2 127.9l93.8 0c0-23.2 0-46.5 0-69.7L32 256.1zM34.2 222c1.5 .7 2.9 1.3 4.4 2L160 279.2c0-7.7 0-15.4 0-23.2l256 0 0 23.2c40.5-18.4 80.9-36.8 121.4-55.2c1.5-.7 2.9-1.3 4.4-2C525.1 96.7 417.9 0 288 0S50.9 96.7 34.2 222zM88.1 416c46.9 58.5 119 96 199.9 96s152.9-37.5 199.9-96L416 416l0 32-256 0c0-10.7 0-21.3 0-32l-71.9 0zm44.5-235.3C146.4 167 184.6 144 240 144l16 0 0 32-16 0c-47 0-77.1 19.7-84.7 27.3l-22.6-22.6zM320 144l16 0c55.4 0 93.6 23 107.3 36.7l-22.6 22.6C413.1 195.7 383 176 336 176l-16 0 0-32zm96 170.3l0 69.7 93.8 0c21.8-37.6 34.2-81.3 34.2-127.9L416 314.3z" />
        <path d="M38.6 224l-14.6-6.6L10.8 246.5l14.6 6.6L160 314.3l0 69.7L40 384l0 32 120 0 0 32 256 0 0-32 112 0 0-32-112 0 0-69.7 134.6-61.2 14.6-6.6-13.2-29.1L537.4 224 416 279.2l0-23.2-256 0 0 23.2L38.6 224zM208 304l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 64l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FaceMask;
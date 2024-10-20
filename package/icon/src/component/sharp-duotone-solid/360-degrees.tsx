
import { Icon, generic } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=sharp-duotone-solid 360-degrees}
 * @preview ![360-degrees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/360-degrees.svg)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M320 96L305.7 67.4l28.6-14.3 28.6 57.2-28.5 14.2-.1 .1c-.2 .1-.6 .3-1.2 .7c-1.2 .7-3.1 1.8-5.4 3.3c-4.7 3.1-11 7.8-17.1 14C298.1 155.1 288 171.5 288 192l0 1.6c5.2-1 10.5-1.6 16-1.6c44.2 0 80 35.8 80 80l0 96c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-48s0 0 0 0l0-32 0-96c0-43.5 21.9-75.1 41.4-94.6c9.8-9.8 19.6-17.1 26.9-22c3.7-2.5 6.8-4.3 9.1-5.7c1.2-.7 2.1-1.2 2.8-1.6l.9-.5 .3-.2 .1-.1c0 0 0 0 .1 0c0 0 0 0 0 0L320 96zM0 64l32 0 128 0 32 0 0 32 0 8 0 11.8-7.7 9-64 74.6C162.2 215.7 192 256.4 192 304l0 48c0 53-43 96-96 96s-96-43-96-96l64 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48l-16 0-32 0 0-32 0-8 0-11.8 7.7-9L97.3 128 32 128 0 128 0 64zm496 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm-80 16c0-44.2 35.8-80 80-80s80 35.8 80 80l0 224c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-224zM288 272l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Icon>
);

export default $360Degrees;
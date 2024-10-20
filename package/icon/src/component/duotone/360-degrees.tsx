
import { Icon, generic } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=duotone 360-degrees}
 * @preview ![360-degrees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/360-degrees.svg)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M0 96C0 78.3 14.3 64 32 64l128 0c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5l-63.7 84.9C163 216.7 192 257 192 304l0 48c0 53-43 96-96 96l-5.5 0c-25.5 0-49.9-10.1-67.9-28.1L9.4 406.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l13.3 13.3c6 6 14.1 9.4 22.6 9.4l5.5 0c17.7 0 32-14.3 32-32l0-48c0-26.5-21.5-48-48-48l-16 0c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L96 128l-64 0C14.3 128 0 113.7 0 96zm496 32c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm0 320c-44.2 0-80-35.8-80-80l0-224c0-44.2 35.8-80 80-80s80 35.8 80 80l0 224c0 44.2-35.8 80-80 80zM320 128c-17.7 0-32 14.3-32 32l0 33.6c5.2-1 10.5-1.6 16-1.6c44.2 0 80 35.8 80 80l0 96c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-79.8 0-.2 0-128c0-53 43-96 96-96c17.7 0 32 14.3 32 32s-14.3 32-32 32zM288 272l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Icon>
);

export default $360Degrees;
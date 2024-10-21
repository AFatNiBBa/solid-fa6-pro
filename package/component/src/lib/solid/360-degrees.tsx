
import { Icon } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=solid 360-degrees}
 * @preview ![360-degrees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/360-degrees.svg)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l64 0L38.4 204.8c-7.3 9.7-8.4 22.7-3 33.5S51.9 256 64 256l16 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32l-5.5 0c-8.5 0-16.6-3.4-22.6-9.4L54.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l13.3 13.3c18 18 42.4 28.1 67.9 28.1l5.5 0c53 0 96-43 96-96l0-48c0-47-29-87.3-70.1-103.9l63.7-84.9c7.3-9.7 8.4-22.7 3-33.5S172.1 64 160 64L32 64zm448 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm96 224l0-224c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80s80-35.8 80-80zM288 160c0-17.7 14.3-32 32-32s32-14.3 32-32s-14.3-32-32-32c-53 0-96 43-96 96l0 128 0 .2 0 79.8c0 44.2 35.8 80 80 80s80-35.8 80-80l0-96c0-44.2-35.8-80-80-80c-5.5 0-10.8 .6-16 1.6l0-33.6zm0 112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96z" />
    </Icon>
);

export default $360Degrees;
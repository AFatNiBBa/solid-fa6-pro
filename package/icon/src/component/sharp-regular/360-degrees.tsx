
import { Icon } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=sharp-regular 360-degrees}
 * @preview ![360-degrees](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/360-degrees.svg)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM496 400c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 224c0 17.7-14.3 32-32 32zm0-336c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80s80-35.8 80-80l0-224c0-44.2-35.8-80-80-80zM24 64L0 64l0 48 24 0 86 0L36.8 209.6 32 216l0 8 0 8 0 24 24 0 32 0c30.9 0 56 25.1 56 56l0 40c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-3L0 349l0 3c0 53 43 96 96 96s96-43 96-96l0-40c0-54.2-41.4-98.7-94.3-103.6l73.5-98L176 104l0-8 0-8 0-24-24 0L24 64zM323.2 88c-11.3-21.2-11.3-21.2-11.3-21.2s0 0 0 0s0 0 0 0l-.1 .1-.3 .1-.9 .5c-.7 .4-1.7 1-2.9 1.7c-2.4 1.4-5.7 3.5-9.7 6.1c-7.9 5.3-18.4 13.1-29 23.3c-20.7 19.8-45 51.7-45 93.3l0 80 0 16 0 24 0 56c0 44.2 35.8 80 80 80s80-35.8 80-80l0-96c0-44.2-35.8-80-80-80c-11.4 0-22.2 2.4-32 6.7l0-6.7c0-22.3 13.3-42.5 30.2-58.7c8.2-7.8 16.4-14 22.7-18.2c3.1-2.1 5.6-3.7 7.3-4.7c.9-.5 1.5-.9 1.9-1.1l.4-.2c0 0 0 0 0 0s0 0 0 0l21.1-11.2L333.1 55.5 311.9 66.8 323.2 88zM272 272c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-56 0-24 0-16z" />
    </Icon>
);

export default $360Degrees;
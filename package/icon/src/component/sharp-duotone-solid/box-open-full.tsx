
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=sharp-duotone-solid box-open-full}
 * @preview ![box-open-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-open-full.svg)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288L64 160l256 32L224 352 64 306.3C42.7 300.2 21.3 294.1 0 288zm320-96l256-32 64 128c-21.3 6.1-42.7 12.2-64 18.3c-53.3 15.2-106.7 30.5-160 45.7c-32-53.3-64-106.7-96-160z" />
        <path d="M312.8 157.6c4.6-8.8 7.2-18.9 7.2-29.6c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 5.1 .6 10 1.7 14.7l-65.5-8.2c-.1-2.2-.2-4.3-.2-6.5C128 57.3 185.3 0 256 0s128 57.3 128 128c0 1.2 0 2.4 0 3.5L444.6 3.5l86.8 41.1-44.1 93L320 158.5l-7.2-.9zM224 352l96-160 96 160 160-45.7L576 448 320 512 64 448l0-141.7L224 352z" />
    </Icon>
);

export default BoxOpenFull;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-wave` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-wave?s=sharp-duotone-solid hand-wave}
 * @preview ![hand-wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-wave.svg)
 */
const HandWave: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M18.7 288l22.6 22.6 9.4 9.4 22.6 22.6L180.4 449.7l4.9 4.9c22.2 22.2 49.2 36.9 77.6 44.1c58 17 122.8 6.6 173.6-32.7c47.6-36.8 75.5-93.5 75.5-153.7L512 128l0-32-32 0-16 0-32 0 0 32 0 99.5c-3-3.5-6.1-6.9-9.4-10.2l-192-192L208 2.7 162.7 48l22.6 22.6 136 136-18.7 18.7-152-152L128 50.7 82.7 96l22.6 22.6 152 152-18.7 18.7-136-136L80 130.7 34.7 176l22.6 22.6 136 136-18.7 18.7-56-56L96 274.7l-9.4-9.4L64 242.7 18.7 288z" />
        <path d="M352 88l0 16 32 0 0-16 0-8c0-44.2-35.8-80-80-80l-8 0L280 0l0 32 16 0 8 0c26.5 0 48 21.5 48 48l0 8zM32 360l0-16L0 344l0 16 0 8c0 44.2 35.8 80 80 80l8 0 16 0 0-32-16 0-8 0c-26.5 0-48-21.5-48-48l0-8z" />
    </Icon>
);

export default HandWave;
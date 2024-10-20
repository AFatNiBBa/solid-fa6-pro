
import { Icon, generic } from "../../index";

/**
 * A component that renders the `repeat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=duotone repeat}
 * @preview ![repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/repeat.svg)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 416c0 8.2 3.1 16.4 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64C67.1 399.6 64 407.8 64 416z" />
        <path d="M32 256c-17.7 0-32-14.3-32-32C0 135.6 71.6 64 160 64l160 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-160 0c-53 0-96 43-96 96c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default Repeat;
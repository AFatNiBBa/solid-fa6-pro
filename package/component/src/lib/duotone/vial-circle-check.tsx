
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=duotone vial-circle-check}
 * @preview ![vial-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vial-circle-check.svg)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 81.7 14.3 96 32 96l0 288c0 53 43 96 96 96c32.6 0 61.5-16.3 78.8-41.2C197.3 417.1 192 393.2 192 368c0-37.7 11.8-72.6 32-101.2L224 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0L96 32 32 32C14.3 32 0 46.3 0 64zM96 96l64 0 0 96-64 0 0-96z" />
        <path d="M368 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L352 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default VialCircleCheck;
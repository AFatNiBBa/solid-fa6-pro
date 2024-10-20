
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-suspension` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-suspension?s=duotone bridge-suspension}
 * @preview ![bridge-suspension](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bridge-suspension.svg)
 */
const BridgeSuspension: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M1.4 147.2c4.5 12.5 18.2 18.9 30.7 14.4c25.5-9.2 46.4-25.8 63.9-44.5L96 256l64 0 0-147.9c12.4 10.7 25.8 20.1 40 28.2L200 256l48 0 0-99c15.5 4.8 31.6 8.1 48 9.8l0 89.2c16 0 32 0 48 0l0-89.2c16.4-1.6 32.5-4.9 48-9.8l0 99c16 0 32 0 48 0l0-119.7c14.2-8 27.6-17.5 40-28.2L480 256l64 0 0-138.9c17.4 18.7 38.4 35.3 63.9 44.5c12.5 4.5 26.2-2 30.7-14.4c1-2.7 1.4-5.4 1.4-8.1c0-9.8-6.1-19-15.9-22.6c-17.7-6.4-33.9-19.3-49.4-36.9c-15.4-17.6-29-38.6-42.1-59.8C528.5 12.7 520.8 8 512 8c-9.1 0-17 5.1-21.1 12.5C455.8 81.6 390.3 120 320 120c-70.3 0-135.8-38.4-171-99.5C145 13 137.1 8 128 8c-8.8 0-16.5 4.7-20.7 11.8C94.3 41 80.7 62 65.3 79.5c-15.5 17.7-31.7 30.6-49.4 36.9C3.4 121-3.1 134.7 1.4 147.2z" />
        <path d="M32 256c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32c35.3 0 64 28.7 64 64l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32c0-53 43-96 96-96l64 0c53 0 96 43 96 96l0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-35.3 28.7-64 64-64c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 256z" />
    </Icon>
);

export default BridgeSuspension;
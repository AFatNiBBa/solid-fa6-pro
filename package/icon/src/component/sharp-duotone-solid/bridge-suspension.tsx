
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-suspension` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-suspension?s=sharp-duotone-solid bridge-suspension}
 * @preview ![bridge-suspension](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bridge-suspension.svg)
 */
const BridgeSuspension: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.6 119.2l26.9 39.8C51.7 143.9 75 126.7 96 105.4L96 256l64 0 0-153.6c12.3 12 25.6 22.6 40 31.6L200 256l48 0 0-99.5c15.3 5.1 31.3 8.5 48 10.2l0 89.2c16 0 32 0 48 0l0-89.2c16.7-1.7 32.7-5.2 48-10.3l0 99.5c16 0 32 0 48 0l0-122.1c14.4-9 27.7-19.6 40-31.6L480 256l64 0 0-150.6c21 21.3 44.3 38.5 66.6 53.6l26.9-39.8c-39.2-26.5-74.9-55.7-96-97.9L534.8 8 520 8 504 8 490.1 8l-6.9 12.1C447.6 82.4 389.4 120 320 120s-127.6-37.6-163.2-99.9L149.9 8 136 8 120 8 105.2 8 98.5 21.3c-21.1 42.2-56.8 71.4-96 97.9z" />
        <path d="M16 256L0 256l0 16 0 64 0 16 16 0 80 0 0 144 0 16 16 0 64 0 16 0 0-16 0-144 256 0 0 144 0 16 16 0 64 0 16 0 0-16 0-144 80 0 16 0 0-16 0-64 0-16-16 0L16 256z" />
    </Icon>
);

export default BridgeSuspension;
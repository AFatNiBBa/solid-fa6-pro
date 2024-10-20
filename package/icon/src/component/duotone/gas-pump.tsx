
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=duotone gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64l0 384 288 0 0-144 0-48 0-192c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64zM96 80c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-96z" />
        <path d="M384 64l32 32 0 64c0 29.8 20.4 54.9 48 62l0 154c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-8 0 0 48 8 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-152 0-32 0-24 0-13.5c0-17-6.7-33.3-18.7-45.3L416 32c-8.8-8.8-23.2-8.8-32 0s-8.8 23.2 0 32zM0 480c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default GasPump;
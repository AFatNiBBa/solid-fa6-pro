
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microchip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=sharp-duotone-solid microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l0 48 24 0 40 0 0-48-40 0L0 128zM0 232l0 48 24 0 40 0 0-48-40 0L0 232zM0 336l0 48 24 0 40 0 0-48-40 0L0 336zM128 0l0 24 0 40 48 0 0-40 0-24L128 0zm0 448l0 40 0 24 48 0 0-24 0-40-48 0zm32-288l0 192 192 0 0-192-192 0zM232 0l0 24 0 40 48 0 0-40 0-24L232 0zm0 448l0 40 0 24 48 0 0-24 0-40-48 0zM336 0l0 24 0 40 48 0 0-40 0-24L336 0zm0 448l0 40 0 24 48 0 0-24 0-40-48 0zM448 128l0 48 40 0 24 0 0-48-24 0-40 0zm0 104l0 48 40 0 24 0 0-48-24 0-40 0zm0 104l0 48 40 0 24 0 0-48-24 0-40 0z" />
        <path d="M448 64L64 64l0 384 384 0 0-384zm-64 64l0 256-256 0 0-256 256 0z" />
    </Icon>
);

export default Microchip;
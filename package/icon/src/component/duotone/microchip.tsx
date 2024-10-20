
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microchip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=duotone microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 152c0 13.3 10.7 24 24 24l40 0 0-48-40 0c-13.3 0-24 10.7-24 24zM0 256c0 13.3 10.7 24 24 24l40 0 0-48-40 0c-13.3 0-24 10.7-24 24zM0 360c0 13.3 10.7 24 24 24l40 0 0-48-40 0c-13.3 0-24 10.7-24 24zM128 24l0 40 48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24zm0 424l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40-48 0zm32-288l0 192 192 0 0-192-192 0zM232 24l0 40 48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24zm0 424l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40-48 0zM336 24l0 40 48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24zm0 424l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40-48 0zM448 128l0 48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0zm0 104l0 48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0zm0 104l0 48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0z" />
        <path d="M128 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L128 64zm32 64l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Microchip;
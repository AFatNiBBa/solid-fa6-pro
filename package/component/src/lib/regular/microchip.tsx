
import { Icon } from "../../index";

/**
 * A component that renders the `microchip` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=regular microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-8 0c-35.3 0-64 28.7-64 64l0 8-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 48-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 48-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 8c0 35.3 28.7 64 64 64l8 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 8 0c35.3 0 64-28.7 64-64l0-8 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-48 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-8c0-35.3-28.7-64-64-64l-8 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0 0-40zM400 128l0 256c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16zM192 160c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-128 0zm16 48l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default Microchip;
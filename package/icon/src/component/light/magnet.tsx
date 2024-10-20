
import { Icon } from "../../index";

/**
 * A component that renders the `magnet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=light magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 64c-8.8 0-16 7.2-16 16l0 48 80 0 0-48c0-8.8-7.2-16-16-16L48 64zM32 256c0 106 86 192 192 192s192-86 192-192l0-96-80 0 0 96c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-96-80 0 0 96zM416 128l0-48c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16l0 48 80 0zM0 80C0 53.5 21.5 32 48 32l48 0c26.5 0 48 21.5 48 48l0 176c0 44.2 35.8 80 80 80s80-35.8 80-80l0-176c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 176c0 123.7-100.3 224-224 224S0 379.7 0 256L0 80z" />
    </Icon>
);

export default Magnet;
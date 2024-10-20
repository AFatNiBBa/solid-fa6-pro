
import { Icon } from "../../index";

/**
 * A component that renders the `magnet` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=thin magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 48C26.7 48 16 58.7 16 72l0 72 112 0 0-72c0-13.3-10.7-24-24-24L40 48zM16 256c0 114.9 93.1 208 208 208s208-93.1 208-208l0-96-112 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L16 160l0 96zM432 144l0-72c0-13.3-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24l0 72 112 0zM0 72C0 49.9 17.9 32 40 32l64 0c22.1 0 40 17.9 40 40l0 184c0 44.2 35.8 80 80 80s80-35.8 80-80l0-184c0-22.1 17.9-40 40-40l64 0c22.1 0 40 17.9 40 40l0 184c0 123.7-100.3 224-224 224S0 379.7 0 256L0 72z" />
    </Icon>
);

export default Magnet;
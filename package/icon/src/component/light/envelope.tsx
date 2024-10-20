
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=light envelope}
 * @preview ![envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/envelope.svg)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9l0-39.9c0-17.7-14.3-32-32-32L64 96zM32 207.6L32 384c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-176.4L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
    </Icon>
);

export default Envelope;
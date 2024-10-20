
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=light envelope-open}
 * @preview ![envelope-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/envelope-open.svg)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M241.6 36.8L45 182.4c-8.1 6-13 15.6-13 25.7l0 3.2 10.2 8.3L237.8 380.3c5.1 4.2 11.6 6.5 18.2 6.5s13.1-2.3 18.2-6.5L469.8 219.6l10.2-8.3 0-3.2c0-10.1-4.8-19.7-13-25.7L270.4 36.8c-4.2-3.1-9.2-4.8-14.4-4.8s-10.3 1.7-14.4 4.8zM32 252.7L32 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-195.3L294.5 405.1C283.7 414 270 418.9 256 418.9s-27.7-4.9-38.5-13.8L32 252.7zM222.5 11C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L486.1 156.7c16.3 12.1 25.9 31.1 25.9 51.4L512 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 208.1c0-20.3 9.6-39.4 25.9-51.4L222.5 11z" />
    </Icon>
);

export default EnvelopeOpen;
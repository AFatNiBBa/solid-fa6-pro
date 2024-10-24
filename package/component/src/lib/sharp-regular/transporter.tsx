
import { Icon } from "../../index";

/**
 * A component that renders the `transporter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter?s=sharp-regular transporter}
 * @preview ![transporter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/transporter.svg)
 */
const Transporter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 0l16 32 32 16L480 64 464 96 448 64 416 48l32-16L464 0zM48 64L64 96l32 16L64 128 48 160 32 128 0 112 32 96 48 64zM96 464l24 0 272 0 24 0 0 48-24 0-272 0-24 0 0-48zM208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-15.1 80l12.1 0 102.2 0 12.1 0 7.2 9.7 83.3 112L424 268.9l-38.5 28.7-14.3-19.3L320 209.6 320 432l-48 0 0-112-32 0 0 112-48 0 0-222.4-51.1 68.7-14.3 19.3L88 268.9l14.3-19.3 83.3-112 7.2-9.7zM240 272l32 0 0-96-32 0 0 96z" />
    </Icon>
);

export default Transporter;
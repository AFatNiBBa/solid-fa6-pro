
import { Icon } from "../../index";

/**
 * A component that renders the `omega` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=sharp-light omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64C118 64 32 150 32 256c0 72.6 40.3 135.8 99.9 168.5l8.3 4.6 0 9.5 0 25.5 0 16-16 0L16 480 0 480l0-32 16 0 92.2 0 0-.2C43.4 408.5 0 337.3 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 81.3-43.4 152.5-108.2 191.8l0 .2 92.2 0 16 0 0 32-16 0-108.2 0-16 0 0-16 0-25.5 0-9.5 8.3-4.6C375.7 391.8 416 328.6 416 256c0-106-86-192-192-192z" />
    </Icon>
);

export default Omega;
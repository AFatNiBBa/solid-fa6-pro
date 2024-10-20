
import { Icon } from "../../index";

/**
 * A component that renders the `omega` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=sharp-regular omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80C126.8 80 48 158.8 48 256c0 66.6 36.9 124.5 91.5 154.5l12.5 6.8 0 14.2 0 24.5 0 24-24 0L24 480 0 480l0-48 24 0 61.4 0C33.4 391 0 327.4 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 71.4-33.4 135-85.4 176l61.4 0 24 0 0 48-24 0-104 0-24 0 0-24 0-24.5 0-14.2 12.5-6.8C363.1 380.5 400 322.6 400 256c0-97.2-78.8-176-176-176z" />
    </Icon>
);

export default Omega;
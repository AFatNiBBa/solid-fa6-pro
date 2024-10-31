
import { Icon } from "../../index";

/**
 * A component that renders the `pump-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pump-medical?s=sharp-solid pump-medical}
 * @preview ![pump-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pump-medical.svg)
 */
const PumpMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 0l0 128 128 0 0-32 82.7 0 38.6 38.6L400 157.3 445.3 112 422.6 89.4l-48-48L365.3 32 352 32l-96 0 0-32L128 0zM56 160L32 512l320 0L328 160 56 160zm160 96l0 24 0 32 32 0 24 0 0 48-24 0-32 0 0 32 0 24-48 0 0-24 0-32-32 0-24 0 0-48 24 0 32 0 0-32 0-24 48 0z" />
    </Icon>
);

export default PumpMedical;
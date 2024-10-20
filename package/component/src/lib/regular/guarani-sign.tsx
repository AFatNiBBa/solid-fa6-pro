
import { Icon } from "../../index";

/**
 * A component that renders the `guarani-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=regular guarani-sign}
 * @preview ![guarani-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/guarani-sign.svg)
 */
const GuaraniSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-13.3 0-24 10.7-24 24l0 41.5C73.3 77.3 0 158.1 0 256s73.3 178.7 168 190.5l0 41.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-41.5c94.7-11.8 168-92.6 168-190.5c0-13.3-10.7-24-24-24l-144 0 0-118c29.7 5 56.2 19 76.8 39.2c9.5 9.3 24.7 9.1 33.9-.3s9.1-24.7-.3-33.9C297.2 90.2 258.8 70.8 216 65.5L216 24c0-13.3-10.7-24-24-24zM168 114l0 284C99.9 386.6 48 327.4 48 256s51.9-130.6 120-142zm48 284l0-118 118 0c-10.1 60.3-57.7 107.9-118 118z" />
    </Icon>
);

export default GuaraniSign;
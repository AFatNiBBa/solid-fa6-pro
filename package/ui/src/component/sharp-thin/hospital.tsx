
import { Icon } from "../../index";

/**
 * A component that renders the `hospital` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospital?s=sharp-thin hospital}
 * @preview ![hospital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hospital.svg)
 */
const Hospital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0l8 0L472 0l8 0 0 8 0 88 152 0 8 0 0 8 0 400 0 8-8 0-216 0s0 0 0 0l-32 0-8 0-112 0-8 0-32 0s0 0 0 0L8 512l-8 0 0-8L0 104l0-8 8 0 152 0 0-88 0-8zm16 16l0 80 0 16 0 384 80 0 0-136 0-8 8 0 112 0 8 0 0 8 0 136 80 0 0-160 0-224 0-16 0-80L176 16zm448 96l-144 0 0 224 0 160 144 0 0-192-104 0-8 0 0-16 8 0 104 0 0-80-104 0-8 0 0-16 8 0 104 0 0-80zm-464 0L16 112l0 80 104 0 8 0 0 16-8 0L16 208l0 80 104 0 8 0 0 16-8 0L16 304l0 192 144 0 0-384zM368 496l0-128-96 0 0 128 96 0zM296 56l48 0 8 0 0 8 0 32 32 0 8 0 0 8 0 48 0 8-8 0-32 0 0 32 0 8-8 0-48 0-8 0 0-8 0-32-32 0-8 0 0-8 0-48 0-8 8 0 32 0 0-32 0-8 8 0zm8 48l0 8-8 0-32 0 0 32 32 0 8 0 0 8 0 32 32 0 0-32 0-8 8 0 32 0 0-32-32 0-8 0 0-8 0-32-32 0 0 32z" />
    </Icon>
);

export default Hospital;
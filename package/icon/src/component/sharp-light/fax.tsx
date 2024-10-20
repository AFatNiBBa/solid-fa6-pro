
import { Icon } from "../../index";

/**
 * A component that renders the `fax` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=sharp-light fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l16 0L408 0l6.6 0 4.7 4.7 56 56 4.7 4.7 0 6.6 0 88-32 0 0-81.4L401.4 32 160 32l0 96 0 32 0 32 336 0 16 0 0 16 0 288 0 16-16 0-336 0-32 0-32 0-64 0L0 512l0-32L0 160l0-32 32 0 96 0 0-112 0-16zM480 224l-320 0 0 256 320 0 0-256zm-352 0l0-16 0-48-96 0 0 320 64 0 32 0 0-256zM296 376l0 48-48 0 0-48 48 0zm-48-96l48 0 0 48-48 0 0-48zm144 0l0 48-48 0 0-48 48 0zm-48 96l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default Fax;
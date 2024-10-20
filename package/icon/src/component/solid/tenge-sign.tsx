
import { Icon } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=solid tenge-sign}
 * @preview ![tenge-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tenge-sign.svg)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64zM0 192c0-17.7 14.3-32 32-32l160 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0 0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224L32 224c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default TengeSign;
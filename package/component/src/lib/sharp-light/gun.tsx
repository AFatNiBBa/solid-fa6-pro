
import { Icon } from "../../index";

/**
 * A component that renders the `gun` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=sharp-light gun}
 * @preview ![gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gun.svg)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48l0-16-32 0 0 16 0 16L16 64 0 64 0 80 0 224l0 16 16 0 76 0L40 448l-8 32 33 0 143 0 32-128 104 0 11.3 0 3.8-10.6L395.3 240l52.7 0 6.6 0 4.7-4.7L486.6 208l73.4 0 16 0 0-16 0-112 0-16-16 0-48 0 0-16zM248 320l20-80 93.3 0-28.6 80L248 320zm-13-80L183 448 73 448l52-208 110 0zm41-32l-33 0-143 0-68 0L32 96l448 0 32 0 32 0 0 80-64 0-6.6 0-4.7 4.7L441.4 208 276 208z" />
    </Icon>
);

export default Gun;
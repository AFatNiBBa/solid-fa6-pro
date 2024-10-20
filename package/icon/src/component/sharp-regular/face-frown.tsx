
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown?s=sharp-regular face-frown}
 * @preview ![face-frown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-frown.svg)
 */
const FaceFrown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1l-45.2-16.3C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9l-45.2 16.3C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceFrown;
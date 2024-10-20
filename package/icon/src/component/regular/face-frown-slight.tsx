
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-slight` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-slight?s=regular face-frown-slight}
 * @preview ![face-frown-slight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-frown-slight.svg)
 */
const FaceFrownSlight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM334.4 385.9C319.2 369.5 293.2 352 256 352s-63.2 17.5-78.4 33.9c-9 9.7-24.2 10.4-33.9 1.4s-10.4-24.2-1.4-33.9c22-23.8 60-49.4 113.6-49.4s91.7 25.5 113.6 49.4c9 9.7 8.4 24.9-1.4 33.9s-24.9 8.4-33.9-1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceFrownSlight;
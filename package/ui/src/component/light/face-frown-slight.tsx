
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-slight` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-slight?s=light face-frown-slight}
 * @preview ![face-frown-slight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-frown-slight.svg)
 */
const FaceFrownSlight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM347.9 394.5C330 373.8 299.4 352 256 352s-74 21.8-91.9 42.5c-5.8 6.7-15.9 7.4-22.6 1.6s-7.4-15.9-1.6-22.6c22.2-25.7 61-53.5 116.1-53.5s93.8 27.9 116.1 53.5c5.8 6.7 5.1 16.8-1.6 22.6s-16.8 5.1-22.6-1.6zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceFrownSlight;
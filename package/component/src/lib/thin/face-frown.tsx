
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown?s=thin face-frown}
 * @preview ![face-frown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-frown.svg)
 */
const FaceFrown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM151.6 378.4c-1.3 4.2-5.8 6.6-10 5.3s-6.6-5.8-5.3-10C151.8 323.9 199.7 288 256 288s104.2 35.9 119.6 85.6c1.3 4.2-1 8.7-5.3 10s-8.7-1-10-5.3C347.1 335.5 305.5 304 256 304s-91.1 31.5-104.4 74.4zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceFrown;
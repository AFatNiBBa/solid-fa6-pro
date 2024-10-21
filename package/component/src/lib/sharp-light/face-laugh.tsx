
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh?s=sharp-light face-laugh}
 * @preview ![face-laugh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-laugh.svg)
 */
const FaceLaugh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 400c52 0 97.1-32.8 115.7-80l-231.4 0c18.6 47.2 63.7 80 115.7 80zM100 288l32.2 0 247.6 0 32.2 0c-1.1 11-3.2 21.7-6.4 32c-20 64.9-79.4 112-149.6 112s-129.6-47.1-149.6-112c-3.2-10.3-5.3-21-6.4-32zm52.4-96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceLaugh;
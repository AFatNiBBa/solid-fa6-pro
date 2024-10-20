
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-open?s=sharp-light face-frown-open}
 * @preview ![face-frown-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-frown-open.svg)
 */
const FaceFrownOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm136 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm36.2 183.8c-27-10-58.7-15.8-92.6-15.8c-33.9 0-65.5 5.8-92.5 15.8l-25.9 9.6 4.6-27.2C150.6 323.7 200 288 256 288s105.4 35.7 113.9 86.2l4.6 27.2-25.9-9.6zM256 320c-30.2 0-55.4 13.1-69.8 31.8c21.9-5 45.4-7.7 69.8-7.7c24.4 0 47.9 2.7 69.9 7.8C311.4 333.1 286.3 320 256 320z" />
    </Icon>
);

export default FaceFrownOpen;
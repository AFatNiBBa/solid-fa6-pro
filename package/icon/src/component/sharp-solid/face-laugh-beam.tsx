
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh-beam` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-beam?s=sharp-solid face-laugh-beam}
 * @preview ![face-laugh-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-laugh-beam.svg)
 */
const FaceLaughBeam: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-80c-83 0-151.2-63.1-159.2-144l318.4 0c-8 80.9-76.2 144-159.2 144zM176 136c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm104 80c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceLaughBeam;
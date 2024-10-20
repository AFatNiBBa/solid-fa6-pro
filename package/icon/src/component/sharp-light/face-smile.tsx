
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile?s=sharp-light face-smile}
 * @preview ![face-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-smile.svg)
 */
const FaceSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm129.7 71.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 352.3 327.6 400 256 400s-113.7-47.7-126.3-72.8zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceSmile;
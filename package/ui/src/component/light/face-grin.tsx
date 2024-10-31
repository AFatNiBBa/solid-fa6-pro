
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin?s=light face-grin}
 * @preview ![face-grin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-grin.svg)
 */
const FaceGrin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 98.1c-31.2 0-61.4-2.9-89.9-8.3c22.6 23.6 54.5 38.3 89.9 38.3s67.3-14.7 89.9-38.3c-28.5 5.4-58.7 8.3-89.9 8.3zm142.8-30.7c-24.1 54.6-79 92.7-142.8 92.7s-118.7-38.1-142.8-92.7c-5.2-11.7 6.8-22.4 19.1-18.7c37.3 11.1 79.3 17.4 123.8 17.4s86.4-6.3 123.8-17.4c12.3-3.7 24.2 7 19.1 18.7zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceGrin;
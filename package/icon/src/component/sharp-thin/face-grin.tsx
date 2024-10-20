
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin?s=sharp-thin face-grin}
 * @preview ![face-grin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-grin.svg)
 */
const FaceGrin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256.3 91.8c-48.2 0-94.1-6.9-135-19.3c23.3 51.6 75 87.5 135 87.5s111.7-35.8 135-87.5c-40.9 12.4-86.7 19.3-135 19.3zm0-16c51.5 0 99.9-8.1 142-22.3c6.2-2.1 12.3-4.3 18.2-6.7c-1.4 6.5-3.3 12.9-5.4 19.2c-22.5 64.1-83.3 110-154.8 110s-132.3-45.9-154.8-110c-2.2-6.2-4-12.6-5.4-19.2c5.9 2.4 12 4.6 18.2 6.7c42.1 14.2 90.5 22.3 142 22.3zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceGrin;
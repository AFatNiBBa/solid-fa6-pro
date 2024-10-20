
import { Icon } from "../../index";

/**
 * A component that renders the `kiwi-bird` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kiwi-bird?s=sharp-thin kiwi-bird}
 * @preview ![kiwi-bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/kiwi-bird.svg)
 */
const KiwiBird: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M339.8 320l-4.8 6.7C303 371.1 250.9 400 192 400c-22.6 0-44.2-4.3-64-12l0-60 0-8-16 0 0 8 0 52.8C55 351.7 16 292.4 16 224C16 126.8 94.8 48 192 48c58.9 0 111 28.9 143 73.3l4.8 6.7 8.2 0 116 0c53 0 96 43 96 96l0 8 0 88-212 0-8.2 0zm162.9 16l57.4 0 0 89.5L502.6 336zM348 336l135.7 0 77.6 121.1 14.7 23 0-27.3L576 336l0-16 0-96c0-61.9-50.1-112-112-112l-116 0c-34.9-48.5-91.7-80-156-80C86 32 0 118 0 224c0 77.5 45.9 144.3 112 174.6l0 73.4 0 8 16 0 0-8 0-66.9c20 7.1 41.6 10.9 64 10.9c10.9 0 21.6-.9 32-2.7l0 58.7 0 8 16 0 0-8 0-62c44.1-11.4 82.1-38 108-74zm100-96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default KiwiBird;
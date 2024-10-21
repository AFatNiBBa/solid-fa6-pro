
import { Icon } from "../../index";

/**
 * A component that renders the `q` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=sharp-light q}
 * @preview ![q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/q.svg)
 */
const Q: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 256c0 106 86 192 192 192c41.9 0 80.6-13.4 112.2-36.2L224.9 256l39.3 0 96.4 134.9C394.9 356.2 416 308.6 416 256c0-106-86-192-192-192S32 150 32 256zM354.8 437.9C318 464.4 272.8 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 63.3-26.3 120.5-68.6 161.3L447.1 512l-39.3 0-53-74.1z" />
    </Icon>
);

export default Q;
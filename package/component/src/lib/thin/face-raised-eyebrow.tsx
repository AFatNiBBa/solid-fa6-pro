
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=thin face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192.4 240a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm144 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm36-115l4.9 7.4c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-4.9-7.4c-16.8-25.2-52.5-28.7-73.9-7.3l-29.5 29.5c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l29.5-29.5c14.3-14.3 38.1-11.9 49.3 4.9zM120 160c0 4.4 3.6 8 8 8l64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0c-4.4 0-8 3.6-8 8zm48 184c-4.4 0-8 3.6-8 8s3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
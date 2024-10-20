
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=sharp-thin face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192.4 240a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm144 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm36-115l4.9 7.4 4.4 6.7 13.3-8.9-4.4-6.7-4.9-7.4c-16.8-25.2-52.5-28.7-73.9-7.3l-29.5 29.5-5.7 5.7L288 171.3l5.7-5.7 29.5-29.5c14.3-14.3 38.1-11.9 49.3 4.9zM120 152l0 16 8 0 64 0 8 0 0-16-8 0-64 0-8 0zm48 192l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
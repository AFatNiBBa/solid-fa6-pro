
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=sharp-light face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM200.4 240a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm29.4-118.5l4.9 7.4 8.9 13.3 26.6-17.8-8.9-13.3-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5L265.4 160 288 182.6l11.3-11.3 29.5-29.5c10.7-10.7 28.5-8.9 36.9 3.7zM112 144l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm64 192l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
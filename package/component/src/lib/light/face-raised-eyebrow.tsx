
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=light face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM200.4 240a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm136 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm29.4-118.5l4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5c10.7-10.7 28.5-8.9 36.9 3.7zM112 160c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm64 176c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
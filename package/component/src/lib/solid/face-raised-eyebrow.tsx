
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=solid face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208.4-16a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM144 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0c-8.8 0-16 7.2-16 16zM328.8 141.8c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l29.5-29.5zM128 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
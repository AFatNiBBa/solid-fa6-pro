
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=sharp-solid face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208.4-16a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM144 336l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zM328.8 141.8c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4 8.9 13.3 26.6-17.8-8.9-13.3-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5L265.4 160 288 182.6l11.3-11.3 29.5-29.5zM128 144l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
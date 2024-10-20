
import { Icon } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=sharp-regular face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 240a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 328l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zM328.8 141.8l-29.5 29.5L288 182.6 265.4 160l11.3-11.3 29.5-29.5c25-25 66.6-20.9 86.2 8.5l4.9 7.4 8.9 13.3-26.6 17.8-8.9-13.3-4.9-7.4c-8.4-12.6-26.2-14.4-36.9-3.7zM128 144l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
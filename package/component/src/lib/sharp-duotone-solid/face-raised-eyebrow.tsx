
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-raised-eyebrow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-raised-eyebrow?s=sharp-duotone-solid face-raised-eyebrow}
 * @preview ![face-raised-eyebrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-raised-eyebrow.svg)
 */
const FaceRaisedEyebrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM112 144c5.3 0 10.7 0 16 0c21.3 0 42.7 0 64 0c5.3 0 10.7 0 16 0l0 32c-5.3 0-10.7 0-16 0c-21.3 0-42.7 0-64 0c-5.3 0-10.7 0-16 0l0-32zm32 192l16 0 192 0 16 0 0 32-16 0-192 0-16 0 0-32zm64.4-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm57-80c3.8-3.8 7.5-7.5 11.3-11.3c9.8-9.8 19.7-19.7 29.5-29.5c25-25 66.6-20.9 86.2 8.5c1.6 2.5 3.3 4.9 4.9 7.4c3 4.4 5.9 8.9 8.9 13.3c-8.9 5.9-17.7 11.8-26.6 17.8c-3-4.4-5.9-8.9-8.9-13.3c-1.6-2.5-3.3-4.9-4.9-7.4c-8.4-12.6-26.2-14.4-36.9-3.7c-9.8 9.8-19.7 19.7-29.5 29.5c-3.8 3.8-7.5 7.5-11.3 11.3L265.4 160zm103 80a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M328.8 141.8c10.7-10.7 28.5-8.9 36.9 3.7l4.9 7.4 8.9 13.3 26.6-17.8-8.9-13.3-4.9-7.4c-19.6-29.4-61.2-33.5-86.2-8.5l-29.5 29.5L265.4 160 288 182.6l11.3-11.3 29.5-29.5zM128 144l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm80.4 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default FaceRaisedEyebrow;
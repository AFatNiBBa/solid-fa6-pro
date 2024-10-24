
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smirking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smirking?s=sharp-duotone-solid face-smirking}
 * @preview ![face-smirking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smirking.svg)
 */
const FaceSmirking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96-64l16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32zm80 176l16 0 112.6 0c19.6 0 36.2-14.1 39.5-33.4l.2-1.2 2.6-15.8 31.6 5.3-2.6 15.8-.2 1.2c-5.8 34.7-35.8 60.2-71 60.2L192 400l-16 0 0-32zM288 192l16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32l-32 0-16 0 0-32z" />
        <path d="M112 192l-16 0 0 32 16 0 32 0c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-64 0zm192 0l-16 0 0 32 16 0 32 0c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32l-64 0z" />
    </Icon>
);

export default FaceSmirking;
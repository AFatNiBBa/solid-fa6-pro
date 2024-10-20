
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-tongue-squint` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue-squint?s=sharp-duotone-solid face-grin-tongue-squint}
 * @preview ![face-grin-tongue-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-tongue-squint.svg)
 */
const FaceGrinTongueSquint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 368.9 73.1 464.7 174.5 498.8C165.3 484 160 466.6 160 448l0-47.3c-31.9-23.3-55.2-57.8-64-97.9c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29c-8.8 40.2-32.3 75-64.5 98.3l0 46.9c0 18.6-5.3 36-14.5 50.8C438.9 464.7 512 368.9 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zM112 128l118.9 64L112 256l45.7-64L112 128zm169.1 64L400 128l-45.7 64L400 256 281.1 192z" />
        <path d="M112 128l45.7 64L112 256l118.9-64L112 128zm288 0L281.1 192 400 256l-45.7-64L400 128zM320 448l0-64-48 0 0 24-32 0 0-24-48 0 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default FaceGrinTongueSquint;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-ski-lift` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-ski-lift?s=sharp-duotone-solid person-ski-lift}
 * @preview ![person-ski-lift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-ski-lift.svg)
 */
const PersonSkiLift: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-8 188.7L2.3 210.4l88 184L99 412.4l19.3-5.3 88-24 23.2-6.3-12.6-46.3-23.2 6.3L125 355.6 45.7 189.6 35.3 168-8 188.7zM113.2 464.9l16.6 45 22.5-8.3 344-127.1C505.7 371 512 362 512 352l0-40 0-24-48 0 0 24 0 23.3c-48 17.7-96 35.5-144 53.2c-21.3 7.9-42.7 15.8-64 23.7L135.7 456.6l-22.5 8.3zM224 0l0 206.8 32-8.5L256 0 224 0z" />
        <path d="M64 80a48 48 0 1 1 96 0A48 48 0 1 1 64 80zm103.4 60.7l13.7 30.1 32.7 71.9 65.9-17.6L320 256l0 132.5-64 23.7 0-114.5-66.7 17.8c-22.6 6-46.2-5.1-55.9-26.3L96.9 210.3 83.8 182l27.9-13.8 26.1-12.9 29.6-14.7z" />
    </Icon>
);

export default PersonSkiLift;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `smoking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=duotone smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 32l0 11c0 55.2 21.9 108.1 60.9 147.1l21 21c9 9 14.1 21.2 14.1 33.9l0 11c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11c0-29.7-11.8-58.2-32.8-79.2l-21-21C463.2 117.8 448 81.2 448 43l0-11c0-17.7-14.3-32-32-32s-32 14.3-32 32zm96 0l0 11c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8l0 11c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11c0-55.2-21.9-108.1-60.9-147.1l-21-21c-9-9-14.1-21.2-14.1-33.9l0-11c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l352 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L64 352zm160 64l160 0 0 32-160 0 0-32zm320-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96z" />
    </Icon>
);

export default Smoking;
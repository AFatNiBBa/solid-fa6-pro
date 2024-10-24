
import { Icon, generic } from "../../index";

/**
 * A component that renders the `smoking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smoking?s=sharp-duotone-solid smoking}
 * @preview ![smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/smoking.svg)
 */
const Smoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 0l0 43c0 55.2 21.9 108.1 60.9 147.1l21 21c9 9 14.1 21.2 14.1 33.9l0 43 64 0 0-43c0-29.7-11.8-58.2-32.8-79.2l-21-21C463.2 117.8 448 81.2 448 43l0-43L384 0zm96 0l0 43c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8l0 43 64 0 0-43c0-55.2-21.9-108.1-60.9-147.1l-21-21c-9-9-14.1-21.2-14.1-33.9l0-43L480 0z" />
        <path d="M32 352L0 352l0 32 0 96 0 32 32 0 384 0 32 0 0-32 0-96 0-32-32 0L32 352zm192 96l0-32 160 0 0 32-160 0zm320-64l0-32-64 0 0 32 0 96 0 32 64 0 0-32 0-96zm96 0l0-32-64 0 0 32 0 96 0 32 64 0 0-32 0-96z" />
    </Icon>
);

export default Smoking;
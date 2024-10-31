
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sunrise` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sunrise?s=sharp-duotone-solid sunrise}
 * @preview ![sunrise](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sunrise.svg)
 */
const Sunrise: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 374l62.1 90 66.9 0c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112l66.9 0L544 374 417.3 350.7 394 224 288 297.1 182 224 158.7 350.7 32 374zm161.3 90l189.3 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80z" />
        <path d="M354.5 154.9L320 123.5l0 84.5 0 32-64 0 0-32 0-84.5-34.5 31.3-23.7 21.5L154.8 129l23.7-21.5 88-80L288 8l21.5 19.6 88 80L421.2 129l-43 47.4-23.7-21.5zM24 464l528 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0z" />
    </Icon>
);

export default Sunrise;
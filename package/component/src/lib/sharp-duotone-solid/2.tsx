
import { Icon, generic } from "../../index";

/**
 * A component that renders the `2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/2?s=sharp-duotone-solid 2}
 * @preview ![2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/2.svg)
 */
const $2: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M142.9 32C104.4 32 67.5 47.3 40.2 74.5L25.4 89.4 2.7 112 48 157.3l22.6-22.6 14.9-14.9C100.7 104.5 121.3 96 142.9 96c44.8 0 81.1 36.3 81.1 81.1c0 21.5-8.5 42.2-23.8 57.4L9.4 425.4 0 434.7 0 480l32 0 256 0 32 0 0-64-32 0-178.7 0L245.5 279.8c27.2-27.2 42.5-64.1 42.5-102.6C288 97 223 32 142.9 32z" />
    </Icon>
);

export default $2;
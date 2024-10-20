
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diploma` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diploma?s=sharp-duotone-solid diploma}
 * @preview ![diploma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diploma.svg)
 */
const Diploma: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l160 0 48 0 48 0 0 236L64 416 0 288 0 144zm384 0l48 0 48 0 160 0 0 144L576 416 384 380l0-236z" />
        <path d="M208 144l-48 0 0-31c0-44.7 36.3-81 81-81c23.4 0 45.6 10.1 61 27.7l18 20.6 18-20.6C353.4 42.1 375.6 32 399 32c44.7 0 81 36.3 81 81l0 31-48 0 0-31 0-.5 0-.5c0-17.7-14.3-32-32-32l-1 0c-9.5 0-18.6 4.1-24.8 11.3L328 144l56 0 0 336-64-40-64 40 0-336 56 0L265.9 91.3C259.6 84.1 250.5 80 241 80c-18.1 0-32.7 14.5-33 32.5l0 .5 0 31z" />
    </Icon>
);

export default Diploma;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=sharp-duotone-solid drumstick}
 * @preview ![drumstick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/drumstick.svg)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60l12 0 0 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-16.2-6.4-30.9-16.8-41.7L233.5 352 208 352l-48-48 0-25.5-58.4 58.3C90.9 326.4 76.2 320 60 320c-33.1 0-60 26.9-60 60z" />
        <path d="M160 176V304l48 48H336c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176z" />
    </Icon>
);

export default Drumstick;
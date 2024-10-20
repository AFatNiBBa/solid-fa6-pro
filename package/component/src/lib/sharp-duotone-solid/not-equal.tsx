
import { Icon, generic } from "../../index";

/**
 * A component that renders the `not-equal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/not-equal?s=sharp-duotone-solid not-equal}
 * @preview ![not-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/not-equal.svg)
 */
const NotEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 144l32 0 209.1 0c-13.5 21.3-27 42.7-40.5 64L48 208l-32 0 0-64zm0 160l32 0 107.7 0c-13.5 21.3-27 42.7-40.5 64L48 368l-32 0 0-64zm174.9 64c13.5-21.3 27-42.7 40.5-64L400 304l32 0 0 64-32 0-209.1 0zM292.3 208c13.5-21.3 27-42.7 40.5-64l67.2 0 32 0 0 64-32 0-107.7 0z" />
        <path d="M328 32l75.8 0-.7 1.1L120 480l-75.8 0 .7-1.1L328 32z" />
    </Icon>
);

export default NotEqual;
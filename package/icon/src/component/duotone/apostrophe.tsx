
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=duotone apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M72 352c66.3 0 120-53.7 120-120l0-72 0-32 0-32c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l64 0 0 8c0 30.9-25.1 56-56 56l-8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l8 0z" />
    </Icon>
);

export default Apostrophe;
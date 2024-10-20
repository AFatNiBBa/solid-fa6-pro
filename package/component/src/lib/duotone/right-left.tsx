
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=duotone right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384c0 8.5 3.4 16.6 9.4 22.6l96 96c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-64 320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-320 0 0-64c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-96 96c-6 6-9.4 14.1-9.4 22.6z" />
        <path d="M0 128c0-17.7 14.3-32 32-32l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default RightLeft;
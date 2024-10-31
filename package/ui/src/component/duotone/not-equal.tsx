
import { Icon, generic } from "../../index";

/**
 * A component that renders the `not-equal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/not-equal?s=duotone not-equal}
 * @preview ![not-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/not-equal.svg)
 */
const NotEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 176c0-17.7 14.3-32 32-32l212.2 0c-14.2 21.3-28.4 42.7-42.7 64L48 208c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l105.5 0c-14.2 21.3-28.4 42.7-42.7 64L48 368c-17.7 0-32-14.3-32-32zm171.8 32c14.2-21.3 28.4-42.7 42.7-64L400 304c17.7 0 32 14.3 32 32s-14.3 32-32 32l-212.2 0zM294.5 208c14.2-21.3 28.4-42.7 42.7-64l62.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-105.5 0z" />
        <path d="M369.8 37.4c14.7 9.8 18.7 29.7 8.9 44.4l-256 384c-9.8 14.7-29.7 18.7-44.4 8.9s-18.7-29.7-8.9-44.4l256-384c9.8-14.7 29.7-18.7 44.4-8.9z" />
    </Icon>
);

export default NotEqual;
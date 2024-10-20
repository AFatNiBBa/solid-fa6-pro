
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbtack-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack-slash?s=duotone thumbtack-slash}
 * @preview ![thumbtack-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/thumbtack-slash.svg)
 */
const ThumbtackSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 320c0 6.6 2.1 13.2 6 18.7c6 8.3 15.7 13.3 26 13.3l164.9 0L177.1 235.6c-20.9 18.9-37.2 43.3-46.5 71.3l-1 3c-1.1 3.3-1.6 6.7-1.6 10.1zM160 32c0 17.7 14.3 32 32 32l29.5 0-6.1 79.5L481.4 352c9.8-.4 18.9-5.3 24.6-13.3c6-8.3 7.7-19.1 4.4-28.8l-1-3c-13.8-41.5-42.8-74.8-79.5-94.7L418.5 64 448 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32zM288 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96-64 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ThumbtackSlash;
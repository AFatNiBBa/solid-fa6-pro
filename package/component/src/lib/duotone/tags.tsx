
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tags` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=duotone tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303.9 56c0 6.1 2.3 12.2 6.9 16.9L438.6 202.1c33.9 34.3 33.9 89.4 0 123.7L326.7 439.1c-9.3 9.4-9.2 24.6 .2 33.9c4.7 4.6 10.8 6.9 16.9 6.9c6.2 0 12.4-2.4 17.1-7.1L472.8 359.6c26.2-26.5 39.3-61 39.3-95.6s-13.1-69.1-39.3-95.6L345 39.1c-4.7-4.8-10.9-7.1-17.1-7.1c-6.1 0-12.2 2.3-16.9 6.9c-4.8 4.7-7.1 10.9-7.1 17.1z" />
        <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0L410.7 309.3c25-25 25-65.5 0-90.5l-168-168c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Tags;
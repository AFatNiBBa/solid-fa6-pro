
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shredder` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=duotone shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M40 384l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104-48 0zM64 64l0 128 384 0 0-101.5c0-17-6.7-33.3-18.7-45.3L402.7 18.7C390.7 6.7 374.5 0 357.5 0L128 0C92.7 0 64 28.7 64 64zm72 320l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104-48 0zm96 0l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104-48 0zm96 0l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104-48 0zm96 0l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104-48 0z" />
        <path d="M64 192c-35.3 0-64 28.7-64 64l0 96c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-96c0-35.3-28.7-64-64-64L64 192zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Shredder;
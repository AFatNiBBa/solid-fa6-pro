
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-dotted-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-dotted-line?s=duotone down-from-dotted-line}
 * @preview ![down-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-from-dotted-line.svg)
 */
const DownFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64A32 32 0 1 1 0 64a32 32 0 1 1 64 0zm96 0A32 32 0 1 1 96 64a32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M196.7 468.7L73.9 345.9c-6.4-6.4-9.9-15-9.9-24C64 303.2 79.2 288 97.9 288l62.1 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 128 62.1 0c18.7 0 33.9 15.2 33.9 33.9c0 9-3.6 17.6-9.9 24L251.3 468.7c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3z" />
    </Icon>
);

export default DownFromDottedLine;
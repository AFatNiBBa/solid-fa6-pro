
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-low` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-low?s=duotone temperature-low}
 * @preview ![temperature-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/temperature-low.svg)
 */
const TemperatureLow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L256 112C256 50.2 205.9 0 144 0S32 50.2 32 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368zm64 0c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5L96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M416 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128A96 96 0 1 0 416 0a96 96 0 1 0 0 192zM144 256c-8.8 0-16 7.2-16 16l0 50.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3l0-50.7c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default TemperatureLow;
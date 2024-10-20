
import { Icon, generic } from "../../index";

/**
 * A component that renders the `do-not-enter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=duotone do-not-enter}
 * @preview ![do-not-enter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/do-not-enter.svg)
 */
const DoNotEnter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 224c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L96 304c-8.8 0-16-7.2-16-16l0-64z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM96 208l320 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L96 304c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default DoNotEnter;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-xmark?s=duotone hexagon-xmark}
 * @preview ![hexagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hexagon-xmark.svg)
 */
const HexagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.4 256c0 12.4 3.2 24.9 9.6 36l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c6.4-11.1 9.6-23.6 9.6-36s-3.2-24.9-9.6-36L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220c-6.4 11.1-9.6 23.6-9.6 36zm160.7 61.7c.1-.7 .2-1.5 .3-2.3c.3-1.5 .7-3 1.3-4.4c1.2-2.9 2.9-5.6 5.3-7.9c15.7-15.7 31.3-31.4 47-47c-15.7-15.7-31.3-31.3-47-47c-9.4-9.4-9.4-24.6 0-33.9c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c15.7 15.7 31.3 31.3 47 47c15.7-15.7 31.3-31.3 47-47c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c9.4 9.4 9.4 24.6 0 33.9c-15.7 15.7-31.3 31.3-47 47c15.7 15.7 31.4 31.4 47 47c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7l-47-47c-15.7 15.7-31.3 31.3-47 47c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-2.3-2.3-4.1-5.1-5.3-7.9c-.6-1.4-1-2.9-1.3-4.4c-.2-1.1-.4-2.3-.3-2.2c-.1-1.2-.1-1.2-.1-2.4c0-1.5 .1-1.9 .1-2.3z" />
        <path d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z" />
    </Icon>
);

export default HexagonXmark;
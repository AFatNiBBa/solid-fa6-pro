
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=solid turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M350 334.5c3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144c-6.6-7-8.4-17.2-4.6-26s12.5-14.5 22-14.5l88 0 0-192c0-17.7-14.3-32-32-32L32 96C14.3 96 0 81.7 0 64L0 32C0 14.3 14.3 0 32 0l80 0c70.7 0 128 57.3 128 128l0 192 88 0c9.6 0 18.2 5.7 22 14.5z" />
    </Icon>
);

export default TurnDown;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=duotone tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 96c0-35.3 28.7-64 64-64l416 0c35.3 0 64 28.7 64 64l0 48c0 8.8-7.4 15.7-15.7 18.6C605.5 169.1 592 187 592 208s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 48c0 35.3-28.7 64-64 64l-416 0c-35.3 0-64-28.7-64-64l0-48c0-8.8 7.4-15.7 15.7-18.6C130.5 246.9 144 229 144 208s-13.5-38.9-32.3-45.4C103.4 159.7 96 152.8 96 144l0-48z" />
        <path d="M24 96c13.3 0 24 10.7 24 24l0 240c0 39.8 32.2 72 72 72l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-400 0C53.7 480 0 426.3 0 360L0 120c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default TicketsSimple;
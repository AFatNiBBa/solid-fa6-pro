
import { Icon, generic } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=duotone honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l448 0c0 50.4-10.5 93-25.5 128l-397 0C10.5 317 0 274.4 0 224zM128 32l48 0 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104z" />
        <path d="M64 32l64 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 208 0c17.7 0 32 14.3 32 32s-14.3 32-32 32c38.9 29.2 64 75.7 64 128L0 224c0-52.3 25.1-98.8 64-128C46.3 96 32 81.7 32 64s14.3-32 32-32zM25.5 352l397 0c-26.3 61.4-66.4 99.8-87.8 117.1c-9.3 7.5-21.1 10.9-33.1 10.9l-155.3 0c-12 0-23.7-3.3-33.1-10.9C91.9 451.8 51.8 413.4 25.5 352z" />
    </Icon>
);

export default HoneyPot;
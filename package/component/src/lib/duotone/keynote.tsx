
import { Icon, generic } from "../../index";

/**
 * A component that renders the `keynote` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=duotone keynote}
 * @preview ![keynote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/keynote.svg)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 112l0 48 48 0 0-48c0-22.1 17.9-40 40-40l14.4 0c8.3 14.3 23.8 24 41.6 24l64 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L240 0c-17.8 0-33.3 9.7-41.6 24L184 24c-48.6 0-88 39.4-88 88zm32 368c0 17.7 14.3 32 32 32l96 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-96-64 0 0 96-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M80 160c-12.1 0-23.2 6.8-28.6 17.7l-48 96C1.2 278.1 0 283 0 288l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-5-1.2-9.9-3.4-14.3l-48-96C455.2 166.8 444.1 160 432 160L80 160z" />
    </Icon>
);

export default Keynote;
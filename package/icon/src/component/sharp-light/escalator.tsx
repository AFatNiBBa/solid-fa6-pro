
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=sharp-light escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M264 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0A56 56 0 1 1 184 56zm233.9 72l6 0 24 0 112 0 64 0 16 0 0 16 0 128 0 16-16 0-64 0-81.9 0L244.7 492.2 226.6 508l-4.5 4-6 0-24 0L80 512l-64 0L0 512l0-16L0 368l0-16 16 0 64 0 81.9 0L395.3 147.8 413.4 132l4.5-4zm12 32l-13.6 11.9L178.5 380l-4.5 4-6 0-88 0-48 0 0 96 48 0 112 0 18 0 13.6-11.9L461.5 260l4.5-4 6 0 88 0 48 0 0-96-48 0-112 0-18 0zM320 171.2l-32 28 0-23.2-96 0 0 107.2-32 28L160 176l0-32 32 0 96 0 32 0 0 27.2z" />
    </Icon>
);

export default Escalator;
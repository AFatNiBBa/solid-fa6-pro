
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quotes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quotes?s=duotone quotes}
 * @preview ![quotes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/quotes.svg)
 */
const Quotes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 320c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 24 0 24 0 56c0 48.6-39.4 88-88 88l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c13.3 0 24-10.7 24-24l0-8-32 0c-26.5 0-48-21.5-48-48l0-48zm176 0c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 24 0 24 0 56c0 48.6-39.4 88-88 88l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c13.3 0 24-10.7 24-24l0-8-32 0c-26.5 0-48-21.5-48-48l0-48z" />
        <path d="M88 0C39.4 0 0 39.4 0 88l0 56 0 24 0 24c0 26.5 21.5 48 48 48l48 0c26.5 0 48-21.5 48-48l0-48c0-26.5-21.5-48-48-48L64 96l0-8c0-13.3 10.7-24 24-24l8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L88 0zM264 0c-48.6 0-88 39.4-88 88l0 56 0 24 0 24c0 26.5 21.5 48 48 48l48 0c26.5 0 48-21.5 48-48l0-48c0-26.5-21.5-48-48-48l-32 0 0-8c0-13.3 10.7-24 24-24l8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-8 0z" />
    </Icon>
);

export default Quotes;
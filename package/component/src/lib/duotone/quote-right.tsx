
import { Icon, generic } from "../../index";

/**
 * A component that renders the `quote-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quote-right?s=duotone quote-right}
 * @preview ![quote-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/quote-right.svg)
 */
const QuoteRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 64c0 35.3 28.7 64 64 64l64 0 0 8c0 30.9-25.1 56-56 56l-8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l8 0c66.3 0 120-53.7 120-120l0-72 0-32 0-32c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160z" />
        <path d="M328 416c66.3 0 120-53.7 120-120l0-72 0-32 0-32c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l64 0 0 8c0 30.9-25.1 56-56 56l-8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l8 0z" />
    </Icon>
);

export default QuoteRight;
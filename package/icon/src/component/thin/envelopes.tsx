
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=thin envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 17.8-4.7 3.5L369.1 253.8c-19.7 14.5-46.5 14.5-66.2 0L116.7 117.3l-4.7-3.5L112 96c0-26.5 21.5-48 48-48l352 0zM112 320l0-186.3 181.4 133c25.3 18.6 59.8 18.6 85.2 0L560 133.7 560 320c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48zM160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM0 192L0 416c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default Envelopes;
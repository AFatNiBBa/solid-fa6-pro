
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=solid envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M316.7 249.6c5.6 4.1 12.4 6.4 19.3 6.4s13.7-2.2 19.3-6.4l220-163C570.8 55.7 544.2 32 512 32L160 32c-32.2 0-58.8 23.7-63.3 54.7l220 163zm57.7 25.7C363.3 283.6 349.8 288 336 288s-27.3-4.4-38.4-12.7L96 126l0 194c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-194L374.4 275.3zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z" />
    </Icon>
);

export default Envelopes;
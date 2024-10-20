
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=regular envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 80L160 80c-8.8 0-16 7.2-16 16l0 7.8L321.4 235.2c4.2 3.1 9.3 4.8 14.6 4.8s10.4-1.7 14.6-4.8L528 103.8l0-7.8c0-8.8-7.2-16-16-16zm16 83.5L379.1 273.8C366.7 283 351.5 288 336 288s-30.7-5-43.1-14.2L144 163.5 144 320c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16l0-156.5zM160 32l352 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-352 0c-35.3 0-64-28.7-64-64L96 96c0-35.3 28.7-64 64-64zM24 96c13.3 0 24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l320 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-320 0C60.9 480 0 419.1 0 344L0 120c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Envelopes;
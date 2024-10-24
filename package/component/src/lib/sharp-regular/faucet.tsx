
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=sharp-regular faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 192l-40 0 0-45.6L384 160l0-64L248 109.6 248 64l-48 0 0 45.6L64 96l0 64 136-13.6 0 45.6-32 0-9.9 0-7 7-25 25L24 224 0 224l0 48 24 0 112 0 9.9 0 7-7 25-25 100.1 0 25 25 7 7 9.9 0 40 0c57.4 0 104 46.6 104 104l0 24-64 0 0-8c0-30.9-25.1-56-56-56l-32.3 0-13.1 0-7.1 11.1C277.2 369.3 252.3 384 224 384s-53.2-14.7-67.4-36.9L149.5 336l-13.1 0L24 336 0 336l0 48 24 0 100.1 0c23.4 29.2 59.5 48 99.9 48s76.5-18.8 99.9-48l20.1 0c4.4 0 8 3.6 8 8l0 32 0 24 24 0 112 0 24 0 0-24 0-48c0-83.9-68.1-152-152-152l-30.1 0-25-25-7-7-9.9 0z" />
    </Icon>
);

export default Faucet;
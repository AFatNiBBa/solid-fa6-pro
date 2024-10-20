
import { Icon, generic } from "../../index";

/**
 * A component that renders the `faucet-drip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet-drip?s=duotone faucet-drip}
 * @preview ![faucet-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/faucet-drip.svg)
 */
const FaucetDrip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64c0 17.7 14.3 32 32 32l100.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160l-32 0-22.6-22.6c-6-6-14.1-9.4-22.6-9.4L256 160l0-76-32-4-32 4 0 76-18.7 0c-8.5 0-16.6 3.4-22.6 9.4L128 192l-96 0c-17.7 0-32 14.3-32 32zM192 32l0 12 32 4 32-4 0-12c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M224 80L96 96C78.3 96 64 81.7 64 64s14.3-32 32-32L224 48 352 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L224 80zM436.8 423.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1l18.2-42.4z" />
    </Icon>
);

export default FaucetDrip;
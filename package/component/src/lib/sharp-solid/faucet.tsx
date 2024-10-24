
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=sharp-solid faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 64l0 44.8L64 96l0 64 128-12.8 31.2-3.1 .8-.1s0 0 0 0s0 0 0 0l.8 .1 31.2 3.1L384 160l0-64L256 108.8 256 64l-64 0zM160 224l-32 32L0 256 0 384l132.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-88.4-71.6-160-160-160l-32 0-32-32-32 0 0-44.6-32-3.2-32 3.2 0 44.6-32 0z" />
    </Icon>
);

export default Faucet;
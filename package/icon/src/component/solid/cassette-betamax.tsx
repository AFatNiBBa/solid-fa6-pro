
import { Icon } from "../../index";

/**
 * A component that renders the `cassette-betamax` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-betamax?s=solid cassette-betamax}
 * @preview ![cassette-betamax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cassette-betamax.svg)
 */
const CassetteBetamax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 160L0 160 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256zM192 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 320a96 96 0 1 1 192 0A96 96 0 1 1 64 320zm256-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128z" />
    </Icon>
);

export default CassetteBetamax;
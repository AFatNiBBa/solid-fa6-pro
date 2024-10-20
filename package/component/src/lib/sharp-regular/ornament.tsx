
import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=sharp-regular ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32 64 0 0-32zM128 96l0-32c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32 32 0 0 57.7c57.4 33.2 96 95.2 96 166.3c0 106-86 192-192 192S0 426 0 320c0-71.1 38.6-133.1 96-166.3L96 96l32 0zM84.7 224l214.7 0C273 194.5 234.6 176 192 176s-81 18.5-107.3 48zM56.2 272c-5.3 15-8.2 31.2-8.2 48s2.9 33 8.2 48l271.6 0c5.3-15 8.2-31.2 8.2-48s-2.9-33-8.2-48L56.2 272zM84.7 416c26.4 29.5 64.7 48 107.3 48s81-18.5 107.3-48L84.7 416z" />
    </Icon>
);

export default Ornament;

import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=sharp-thin ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 80l-64 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32zm16 0l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 32-32 0L96 80l0 16 0 48 0 9.7C38.6 186.9 0 248.9 0 320C0 426 86 512 192 512s192-86 192-192c0-71.1-38.6-133.1-96-166.3l0-9.7 0-48 0-16-16 0-32 0zm25.4 80c38.7 17.8 69.8 49.1 87.2 88L31.4 248c17.4-38.9 48.6-70.2 87.2-88l146.8 0zM144 96l16 0 64 0 16 0 32 0 0 48-160 0 0-48 32 0zM16 320c0-19.6 3.2-38.4 9.1-56l333.8 0c5.9 17.6 9.1 36.4 9.1 56s-3.2 38.4-9.1 56L25.1 376c-5.9-17.6-9.1-36.4-9.1-56zM192 496c-71.6 0-133.1-42.7-160.6-104l321.3 0C325.1 453.3 263.6 496 192 496z" />
    </Icon>
);

export default Ornament;
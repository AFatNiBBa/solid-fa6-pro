
import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=thin ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm35.8 64c7.6-8.5 12.2-19.7 12.2-32c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32L128 80c-17.7 0-32 14.3-32 32l0 32 0 9.7C38.6 186.9 0 248.9 0 320C0 426 86 512 192 512s192-86 192-192c0-71.1-38.6-133.1-96-166.3l0-9.7 0-32c0-17.7-14.3-32-32-32l-28.2 0zm37.6 80c38.7 17.8 69.8 49.1 87.2 88L31.4 248c17.4-38.9 48.6-70.2 87.2-88l146.8 0zM192 96l64 0c8.8 0 16 7.2 16 16l0 32-160 0 0-32c0-8.8 7.2-16 16-16l64 0zM16 320c0-19.6 3.2-38.4 9.1-56l333.8 0c5.9 17.6 9.1 36.4 9.1 56s-3.2 38.4-9.1 56L25.1 376c-5.9-17.6-9.1-36.4-9.1-56zM192 496c-71.6 0-133.1-42.7-160.6-104l321.3 0C325.1 453.3 263.6 496 192 496z" />
    </Icon>
);

export default Ornament;

import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=regular ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm55.4 64c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 11.7 3.1 22.6 8.6 32L128 96c-17.7 0-32 14.3-32 32l0 25.7C38.6 186.9 0 248.9 0 320C0 426 86 512 192 512s192-86 192-192c0-71.1-38.6-133.1-96-166.3l0-25.7c0-17.7-14.3-32-32-32l-8.6 0zM192 176c42.6 0 81 18.5 107.3 48L84.7 224c26.4-29.5 64.7-48 107.3-48zM56.2 272l271.6 0c5.3 15 8.2 31.2 8.2 48s-2.9 33-8.2 48L56.2 368c-5.3-15-8.2-31.2-8.2-48s2.9-33 8.2-48zM84.7 416l214.7 0C273 445.5 234.6 464 192 464s-81-18.5-107.3-48z" />
    </Icon>
);

export default Ornament;
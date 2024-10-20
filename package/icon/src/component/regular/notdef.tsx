
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=regular notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 421.8L162.8 256 48 90.2l0 331.7zM77.2 464l229.6 0L192 298.2 77.2 464zm144-208L336 421.8l0-331.7L221.2 256zM306.8 48L77.2 48 192 213.8 306.8 48zM0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z" />
    </Icon>
);

export default Notdef;
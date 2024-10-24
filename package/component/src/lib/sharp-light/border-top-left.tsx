
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=sharp-light border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 448l0 16 32 0 0-16L32 64l384 0 16 0 0-32-16 0L16 32 0 32 0 48 0 448zm104-24l0 48 48 0 0-48-48 0zm192 0l0 48 48 0 0-48-48 0zm-96 48l48 0 0-48-48 0 0 48zm192-48l0 48 48 0 0-48-48 0zm0-144l48 0 0-48-48 0 0 48zm0 48l0 48 48 0 0-48-48 0zm0-144l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default BorderTopLeft;
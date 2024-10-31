
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-t` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-t?s=duotone square-t}
 * @preview ![square-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-t.svg)
 */
const SquareT: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm96 72c0-13.3 10.7-24 24-24l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24z" />
        <path d="M96 168c0-13.3 10.7-24 24-24l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default SquareT;
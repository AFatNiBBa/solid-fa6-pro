
import { Icon } from "../../index";

/**
 * A component that renders the `border-inner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-inner?s=regular border-inner}
 * @preview ![border-inner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/border-inner.svg)
 */
const BorderInner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0-96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM32 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM384 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM384 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM0 64a32 32 0 1 1 64 0A32 32 0 1 1 0 64zM32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM288 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 64a32 32 0 1 1 64 0A32 32 0 1 1 96 64zm32 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 64c-13.3 0-24-10.7-24-24l0-176L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0 0-176c0-13.3 10.7-24 24-24s24 10.7 24 24l0 176 176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0 0 176c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default BorderInner;
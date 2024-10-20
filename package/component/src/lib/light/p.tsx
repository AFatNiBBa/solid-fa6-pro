
import { Icon } from "../../index";

/**
 * A component that renders the `p` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/p?s=light p}
 * @preview ![p](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/p.svg)
 */
const P: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 64l128 0c61.9 0 112 50.1 112 112s-50.1 112-112 112L32 288 32 80c0-8.8 7.2-16 16-16zM32 320l144 0c79.5 0 144-64.5 144-144s-64.5-144-144-144L48 32C21.5 32 0 53.5 0 80L0 304 0 464c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144z" />
    </Icon>
);

export default P;
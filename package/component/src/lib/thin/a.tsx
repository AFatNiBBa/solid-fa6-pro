
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=thin a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M199.4 36.9c-1.3-3-4.2-4.9-7.4-4.9s-6.1 1.9-7.4 4.9L.6 468.9c-1.7 4.1 .2 8.8 4.2 10.5s8.8-.2 10.5-4.2L61 368l262 0 45.6 107.1c1.7 4.1 6.4 6 10.5 4.2s6-6.4 4.2-10.5l-184-432zM316.2 352L67.8 352 192 60.4 316.2 352z" />
    </Icon>
);

export default A;
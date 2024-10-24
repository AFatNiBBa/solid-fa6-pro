
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=thin gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32c-2.5 0-4.9 1.2-6.4 3.2l-120 160c-2.3 3.1-2.1 7.4 .5 10.2l248 272c1.5 1.7 3.7 2.6 5.9 2.6s4.4-.9 5.9-2.6l248-272c2.6-2.8 2.8-7.1 .5-10.2l-120-160c-1.5-2-3.9-3.2-6.4-3.2L128 32zm.2 21.1L239.4 192 24 192 128.2 53.1zM26.1 208L256 208l229.9 0L256 460.1 26.1 208zM488 192l-215.4 0L383.8 53.1 488 192zM367.4 48L256 187.2 144.6 48l222.7 0z" />
    </Icon>
);

export default Gem;
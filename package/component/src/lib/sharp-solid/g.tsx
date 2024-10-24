
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=sharp-solid g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c77.4 0 142-55 156.8-128L224 288l0-64 192 0 32 0 0 32c0 123.7-100.3 224-224 224S0 379.7 0 256S100.3 32 224 32c70.8 0 134 32.9 175 84.1l-50 40C319.6 119.4 274.6 96 224 96z" />
    </Icon>
);

export default G;
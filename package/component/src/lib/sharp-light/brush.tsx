
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-light brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 384l-32 0-64 0L0 384l0-32L0 32 0 0 32 0 352 0l32 0 0 32 0 320 0 32-32 0-64 0-32 0 0 32 0 64 0 32-32 0-64 0-32 0 0-32 0-64 0-32zm0-32l32 0 0 32 0 96 64 0 0-96 0-32 32 0 96 0 0-64L32 288l0 64 96 0zm224-96l0-224L224 32l0 80 0 16-32 0 0-16 0-80-64 0 0 112 0 16-32 0 0-16L96 32 32 32l0 224 320 0z" />
    </Icon>
);

export default Brush;
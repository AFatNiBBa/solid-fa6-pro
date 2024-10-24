
import { Icon, generic } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=sharp-duotone-solid refrigerator}
 * @preview ![refrigerator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/refrigerator.svg)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 32 288 0 0-32L0 160zm320 0l0 32 64 0 0-32-64 0z" />
        <path d="M384 0L0 0 0 160l288 0 0-48 0-16 32 0 0 16 0 48 64 0L384 0zm0 192l-64 0 0 176 0 16-32 0 0-16 0-176L0 192 0 512l384 0 0-320z" />
    </Icon>
);

export default Refrigerator;
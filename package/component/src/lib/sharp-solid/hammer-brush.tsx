
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=sharp-solid hammer-brush}
 * @preview ![hammer-brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hammer-brush.svg)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 0L144 0C64.5 0 0 64.5 0 144l0 16 80-32 32 32 144 0 0-32 32 0 0 32 64 0L352 0 288 0l0 32-32 0 0-32zM96 512l128 0L208 192l-96 0L96 512zm320 0l32-96 32 96 160 0 0-192-288 0 0 192 64 0zM352 256l0 32 288 0 0-32-96-64L544 0 448 0l0 192-96 64zM496 64a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default HammerBrush;
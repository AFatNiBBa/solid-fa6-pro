
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=sharp-solid backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 0l24 0L288 0l24 0 0 24 0 72 8 0c70.7 0 128 57.3 128 128l0 288-64 0 0-112 0-96 0-16-16 0L80 288l-16 0 0 16 0 96 0 112L0 512 0 224C0 153.3 57.3 96 128 96l8 0 0-72 0-24zM96 512l0-96 256 0 0 96L96 512zM264 48l-80 0 0 48 80 0 0-48zm40 128l-160 0-16 0 0 32 16 0 160 0 16 0 0-32-16 0zm48 208L96 384l0-64 256 0 0 64z" />
    </Icon>
);

export default Backpack;
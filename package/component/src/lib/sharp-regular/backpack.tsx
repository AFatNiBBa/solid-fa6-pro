
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=sharp-regular backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M136 0l24 0L288 0l24 0 0 24 0 56 8 0c70.7 0 128 57.3 128 128l0 256 0 48-48 0-32 0-48 0-192 0-48 0-32 0L0 512l0-48L0 208C0 137.3 57.3 80 128 80l8 0 0-56 0-24zm-8 464l192 0 0-64-192 0 0 64zm240 0l32 0 0-256c0-44.2-35.8-80-80-80l-32 0-128 0-32 0c-44.2 0-80 35.8-80 80l0 256 32 0 0-88 0-112 0-24 24 0 240 0 24 0 0 24 0 112 0 88zM264 48l-80 0 0 32 80 0 0-32zM144 160l160 0 24 0 0 48-24 0-160 0-24 0 0-48 24 0zM320 352l0-64-192 0 0 64 192 0z" />
    </Icon>
);

export default Backpack;
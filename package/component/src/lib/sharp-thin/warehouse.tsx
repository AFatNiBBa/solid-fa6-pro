
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=sharp-thin warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 7.4l2.9 1.1 312 120 5.1 2 0 5.5 0 368 0 8-16 0 0-8 0-362.5L320 24.6 16 141.5 16 504l0 8L0 512l0-8L0 136l0-5.5 5.1-2 312-120L320 7.4zM96 192l8 0 432 0 8 0 0 8 0 304 0 8-8 0s0 0 0 0l-432 0s0 0 0 0l-8 0 0-8 0-304 0-8zm16 304l416 0 0-80-416 0 0 80zM528 304l-416 0 0 96 416 0 0-96zm0-16l0-80-416 0 0 80 416 0z" />
    </Icon>
);

export default Warehouse;
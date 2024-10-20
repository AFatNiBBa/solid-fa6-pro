
import { Icon } from "../../index";

/**
 * A component that renders the `pencil` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil?s=sharp-regular pencil}
 * @preview ![pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pencil.svg)
 */
const Pencil: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l10.2-51L32 352l19.2-19.2-.5-.8 3.8-2.6L350.1 33.9 384 0l33.9 33.9 60.1 60.1L512 128l-33.9 33.9L182.5 457.5l-2.6 3.8-.8-.5L160 480 51 501.8 0 512zM76.2 375.7l-15 75.1 75.1-15 8.9-8.9 7.9-11.9-31-7.7-14-3.5-3.5-14-7.7-31-11.9 7.9-8.9 8.9zM382.1 190.1l-60.1-60.1L135.8 316.1l12 48.1 48.1 12L382.1 190.1zm-66.7 28.7l-96 96L208 326.1l-22.6-22.6 11.3-11.3 96-96L304 184.8l22.6 22.6-11.3 11.3z" />
    </Icon>
);

export default Pencil;
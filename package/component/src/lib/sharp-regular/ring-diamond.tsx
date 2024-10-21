
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=sharp-regular ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 0L131.2 0 124 10.7l-32 48L83.9 70.9 91 83.7l31.8 57.2C51 168.6 0 238.4 0 320C0 426 86 512 192 512s192-86 192-192c0-81.6-51-151.4-122.8-179.1L293 83.7l7.1-12.8L292 58.7l-32-48L252.8 0 240 0 144 0zm68.8 129.1C206 128.4 199 128 192 128s-14 .4-20.8 1.1l-31.1-56L156.8 48l70.3 0 16.8 25.1-31.1 56zM48 320a144 144 0 1 1 288 0A144 144 0 1 1 48 320z" />
    </Icon>
);

export default RingDiamond;
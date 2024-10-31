
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=regular ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 0c-8 0-15.5 4-20 10.7l-32 48c-5 7.5-5.4 17.1-1 25l31.8 57.2C51 168.6 0 238.4 0 320C0 426 86 512 192 512s192-86 192-192c0-81.6-51-151.4-122.8-179.1L293 83.7c4.4-7.9 4-17.5-1-25l-32-48C255.5 4 248 0 240 0L144 0zm68.8 129.1C206 128.4 199 128 192 128s-14 .4-20.8 1.1l-31.1-56L156.8 48l70.3 0 16.8 25.1-31.1 56zM48 320a144 144 0 1 1 288 0A144 144 0 1 1 48 320z" />
    </Icon>
);

export default RingDiamond;
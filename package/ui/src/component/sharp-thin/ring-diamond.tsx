
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=sharp-thin ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M139.9 0L144 0l96 0 4.1 0 2.4 3.4 40 56 3.2 4.5-3.1 4.6-44.2 66.3C324 156.9 384 231.4 384 320c0 106-86 192-192 192S0 426 0 320c0-88.6 60-163.1 141.5-185.3L97.3 68.4l-3.1-4.6 3.2-4.5 40-56L139.9 0zM265.1 72L118.9 72l39.3 59c11-1.9 22.2-3 33.7-3s22.8 1 33.7 3l39.3-59zm-.6-16L235.9 16l-87.8 0L119.5 56l144.9 0zM192 496a176 176 0 1 0 0-352 176 176 0 1 0 0 352z" />
    </Icon>
);

export default RingDiamond;
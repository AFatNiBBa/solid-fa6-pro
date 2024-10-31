
import { Icon } from "../../index";

/**
 * A component that renders the `ring-diamond` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring-diamond?s=thin ring-diamond}
 * @preview ![ring-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ring-diamond.svg)
 */
const RingDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M132.7 10.1C137.2 3.7 144.5 0 152.2 0l79.5 0c7.8 0 15 3.7 19.5 10.1l32 44.8c3.9 5.4 4 12.6 .3 18.2l-41.1 61.7C324 156.9 384 231.4 384 320c0 106-86 192-192 192S0 426 0 320c0-88.6 60-163.1 141.5-185.3L100.4 73c-3.7-5.5-3.6-12.8 .3-18.2l32-44.8zM265.1 72L118.9 72l39.3 59c11-1.9 22.2-3 33.7-3s22.8 1 33.7 3l39.3-59zm-.6-16L238.3 19.4c-1.5-2.1-3.9-3.4-6.5-3.4l-79.5 0c-2.6 0-5 1.2-6.5 3.4L119.5 56l144.9 0zM192 496a176 176 0 1 0 0-352 176 176 0 1 0 0 352z" />
    </Icon>
);

export default RingDiamond;
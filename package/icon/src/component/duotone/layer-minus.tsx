
import { Icon, generic } from "../../index";

/**
 * A component that renders the `layer-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-minus?s=duotone layer-minus}
 * @preview ![layer-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/layer-minus.svg)
 */
const LayerMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 9.4 5.4 17.9 13.9 21.8l218.6 101c14.9 6.9 32.1 6.9 47 0l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-218.6-101C304 129.7 296 128 288 128s-16 1.7-23.5 5.2L45.9 234.2C37.4 238.1 32 246.6 32 256zm0 128c0 9.4 5.4 17.9 13.9 21.8l218.6 101C272 510.2 280 512 288 512s16-1.7 23.5-5.2l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-53.2-24.6-152 70.2c-23.4 10.8-50.4 10.8-73.8 0l-152-70.2L45.9 362.2C37.4 366.1 32 374.6 32 384z" />
        <path d="M384 80c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default LayerMinus;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `layer-group` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-group?s=duotone layer-group}
 * @preview ![layer-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/layer-group.svg)
 */
const LayerGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 9.4 5.4 17.9 13.9 21.8l218.6 101C272 382.2 280 384 288 384s16-1.7 23.5-5.2l218.6-101c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8l-53.2-24.6-152 70.2c-23.4 10.8-50.4 10.8-73.8 0l-152-70.2L45.9 234.2C37.4 238.1 32 246.6 32 256z" />
        <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 337.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2z" />
    </Icon>
);

export default LayerGroup;
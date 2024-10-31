
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=light icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 36.6C0 16.4 16.4 0 36.6 0L474.1 0C495 0 512 17 512 37.9c0 2.4-.2 4.8-.7 7.2L423.7 499c-1.5 7.5-8.1 13-15.8 13s-14.3-5.5-15.7-13.1l-58.5-312-30.2 121c-1.8 7-8.1 12-15.3 12.1s-13.7-4.7-15.6-11.7l-22-79.4L215.7 403.1c-1.5 7.5-8.1 12.9-15.7 12.9s-14.2-5.4-15.7-12.9L148.1 222.2l-28.9 86.8C117 315.6 110.9 320 104 320s-13-4.4-15.2-10.9L1.9 48.2C.6 44.5 0 40.6 0 36.6zM36.6 32c-2.6 0-4.6 2.1-4.6 4.6c0 .5 .1 1 .2 1.5L104 253.4l32.8-98.5c2.3-6.9 8.9-11.4 16.2-10.9s13.3 5.7 14.7 12.8L200 318.4l32.3-161.6c1.5-7.3 7.7-12.6 15.1-12.9s14 4.6 16 11.7l23.8 85.6 33.3-133.2c1.8-7.3 8.5-12.3 16-12.1s13.9 5.7 15.2 13l56.5 301.3L479.9 39c.1-.4 .1-.7 .1-1.1c0-3.3-2.6-5.9-5.9-5.9L36.6 32z" />
    </Icon>
);

export default Icicles;
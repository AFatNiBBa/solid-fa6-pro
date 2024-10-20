
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=light h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80L0 256 0 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160 256 0 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160L32 240 32 80zM432 64c-7.6 0-14.2 5.4-15.7 12.9l-32 160c-.9 4.7 .3 9.6 3.3 13.3s7.6 5.9 12.4 5.9l128 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-71.6 0c-17.2 0-32.5-11-37.9-27.4l-3.2-9.7c-2.8-8.4-11.9-12.9-20.2-10.1s-12.9 11.9-10.1 20.2l3.2 9.7c9.8 29.4 37.3 49.2 68.3 49.2l71.6 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-108.5 0L445.1 96 592 96c8.8 0 16-7.2 16-16s-7.2-16-16-16L432 64z" />
    </Icon>
);

export default H5;
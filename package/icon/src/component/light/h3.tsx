
import { Icon } from "../../index";

/**
 * A component that renders the `h3` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=light h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80L0 256 0 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160 256 0 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160L32 240 32 80zM400 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0L421 228.4c-4.7 4.5-6.3 11.5-3.8 17.5s8.3 10.1 14.9 10.1l96 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-72.6 0c-19.6 0-36.2-14.1-39.5-33.4l-.2-1.2c-1.5-8.7-9.7-14.6-18.4-13.2s-14.6 9.7-13.2 18.4l.2 1.2c5.8 34.7 35.8 60.2 71 60.2l72.6 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-56 0L611 91.6c4.7-4.5 6.3-11.5 3.8-17.5S606.5 64 600 64L400 64z" />
    </Icon>
);

export default H3;
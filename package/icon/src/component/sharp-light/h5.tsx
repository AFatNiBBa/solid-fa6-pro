
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=sharp-light h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80l0-16L0 64 0 80 0 256 0 432l0 16 32 0 0-16 0-160 256 0 0 160 0 16 32 0 0-16 0-176 0-176 0-16-32 0 0 16 0 160L32 240 32 80zM432 64l-13.1 0-2.6 12.9-32 160L380.5 256l19.5 0 128 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-69.8 0c-17.9 0-33.6-11.8-38.5-29l-4.4-15.4-30.8 8.8 4.4 15.4c8.8 30.9 37.1 52.2 69.2 52.2l69.8 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-108.5 0L445.1 96 592 96l16 0 0-32-16 0L432 64z" />
    </Icon>
);

export default H5;
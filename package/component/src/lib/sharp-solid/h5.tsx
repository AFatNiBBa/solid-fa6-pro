
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=sharp-solid h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96l0-32L0 64 0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96zM432 64l-28.8 0-3 28.7-16 152L380.5 280l35.5 0 108 0c28.7 0 52 23.3 52 52s-23.3 52-52 52l-64.3 0c-11 0-20.6-7.5-23.3-18.2L431 344.2 369 359.8l5.4 21.6c9.8 39.2 45 66.7 85.4 66.7l64.3 0c64.1 0 116-51.9 116-116s-51.9-116-116-116l-72.5 0 9.3-88L576 128l32 0 0-64-32 0L432 64z" />
    </Icon>
);

export default H5;
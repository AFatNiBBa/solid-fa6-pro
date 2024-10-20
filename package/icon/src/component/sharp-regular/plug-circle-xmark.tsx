
import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-xmark?s=sharp-regular plug-circle-xmark}
 * @preview ![plug-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plug-circle-xmark.svg)
 */
const PlugCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm214.6-48L480 297.4l-11.3 11.3L432 345.4l-36.7-36.7L384 297.4 361.4 320l11.3 11.3L409.4 368l-36.7 36.7L361.4 416 384 438.6l11.3-11.3L432 390.6l36.7 36.7L480 438.6 502.6 416l-11.3-11.3L454.6 368l36.7-36.7L502.6 320zM120 0l0 24 0 88-48 0 0-88L72 0l48 0zM312 0l0 24 0 88-48 0 0-88 0-24 48 0zM0 144l24 0 8 0 48 0 224 0 48 0 8 0 24 0 0 48-24 0-8 0 0 19.2c-18 9.2-34.2 21.4-48 36l0-55.2L80 192l0 64c0 61.9 50.1 112 112 112c24.3 0 46.9-7.8 65.2-20.9c-.8 6.9-1.2 13.9-1.2 20.9c0 11.4 1.1 22.5 3.1 33.3c-13.5 6.2-28 10.7-43.1 12.9l0 97.8-48 0 0-97.8C91 402.6 32 336.2 32 256l0-64-8 0L0 192l0-48z" />
    </Icon>
);

export default PlugCircleXmark;

import { Icon } from "../../index";

/**
 * A component that renders the `mask-face` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-face?s=sharp-light mask-face}
 * @preview ![mask-face](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mask-face.svg)
 */
const MaskFace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M200.1 154.6L288 96l64 0 87.9 58.6c5.3 3.5 11.4 5.4 17.8 5.4l46.3 0 8 0 0 64c0 106-86 192-192 192s-192-86-192-192l0-64 8 0 16 0 30.3 0c6.3 0 12.5-1.9 17.8-5.4zM182.3 128L152 128l-16 0-8 0L16 128 0 128l0 16L0 336l0 12.5 12.1 3 144 36 14.9 3.7c39.6 35.3 91.8 56.8 149 56.8s109.4-21.5 149-56.8l14.9-3.7 144-36 12.1-3 0-12.5 0-192 0-16-16 0-112 0-8 0-46.3 0L369.8 69.4C364.5 65.9 358.3 64 352 64l-64 0c-6.3 0-12.5 1.9-17.8 5.4L182.3 128zM32 160l64 0 0 64c0 46.3 14 89.3 38.1 125L32 323.5 32 160zM608 323.5L505.9 349c24.1-35.7 38.1-78.7 38.1-125l0-64 64 0 0 163.5zM208 192l-16 0 0 32 16 0 224 0 16 0 0-32-16 0-224 0zm-16 64l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0zm48 64l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default MaskFace;
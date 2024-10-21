
import { Icon } from "../../index";

/**
 * A component that renders the `mask-face` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-face?s=sharp-thin mask-face}
 * @preview ![mask-face](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mask-face.svg)
 */
const MaskFace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M187.2 144l4-2.7 87.9-58.6c2.6-1.8 5.7-2.7 8.9-2.7l64 0c3.2 0 6.2 .9 8.9 2.7l87.9 58.6 4 2.7 4.8 0 54.3 0 16 0 0 16 0 64c0 51-18.4 97.8-48.9 134l-.8 .2 .1 .6C440.3 403.6 383.5 432 320 432s-120.3-28.4-158.4-73.2l.1-.6-.8-.2C130.4 321.8 112 275 112 224l0-64 0-16 16 0 8 0 46.3 0 4.8 0zm-4.8-16L136 128l-8 0-16 0-16 0L8 128l-8 0 0 8L0 328l0 6.2 6.1 1.5 144 36 2 .5C193.1 418.7 253.1 448 320 448s126.9-29.3 167.9-75.7l2-.5 144-36 6.1-1.5 0-6.2 0-192 0-8-8 0-88 0-16 0-16 0-54.3 0L369.8 69.4C364.5 65.9 358.3 64 352 64l-64 0c-6.3 0-12.5 1.9-17.8 5.4L182.3 128zM16 144l80 0 0 16 0 64c0 47.5 14.8 91.5 40 127.7l-120-30L16 144zM624 321.8l-120 30c25.2-36.2 40-80.3 40-127.7l0-64 0-16 80 0 0 177.8zM208 192l-8 0 0 16 8 0 224 0 8 0 0-16-8 0-224 0zm-8 64l0 16 8 0 224 0 8 0 0-16-8 0-224 0-8 0zm40 64l-8 0 0 16 8 0 160 0 8 0 0-16-8 0-160 0z" />
    </Icon>
);

export default MaskFace;
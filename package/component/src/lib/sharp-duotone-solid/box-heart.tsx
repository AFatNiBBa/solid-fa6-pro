
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-duotone-solid box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L64 32 0 160zM240 32l0 128 208 0L384 32 240 32z" />
        <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 480l448 0 0-320zM224 408l-86.7-81.2c-21.3-20-21.9-53.6-1.2-74.2c20.2-20.2 52.9-20.2 73.1 0L224 267.4l14.9-14.9c20.2-20.2 52.9-20.2 73.1 0c20.6 20.6 20.1 54.3-1.2 74.2L224 408z" />
    </Icon>
);

export default BoxHeart;
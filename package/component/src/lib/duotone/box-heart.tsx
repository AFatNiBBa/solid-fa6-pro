
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=duotone box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zM240 32l0 128 208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
        <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256zM212.7 404.7l-77.3-77.3c-20.5-20.5-20.5-53.8 0-74.3s53.8-20.5 74.3 0L224 267.4l14.3-14.3c20.5-20.5 53.8-20.5 74.3 0s20.5 53.8 0 74.3l-77.3 77.3c-6.2 6.2-16.4 6.2-22.6 0z" />
    </Icon>
);

export default BoxHeart;
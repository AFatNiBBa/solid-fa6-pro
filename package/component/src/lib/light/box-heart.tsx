
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=light box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 64l102.4 0c12.6 0 24.1 7.4 29.2 19l34.2 77L240 160l0-96zm0 128l176 0 0 224c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-224 176 0 32 0zm-32-32L42.1 160 76.3 83c5.1-11.6 16.6-19 29.2-19L208 64l0 96zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70zM146.7 264.5c14.3-14.3 37.4-14.3 51.7 0l14.3 14.3c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l14.3-14.3c14.3-14.3 37.4-14.3 51.7 0s14.3 37.4 0 51.7L224 393.4l-77.3-77.3c-14.3-14.3-14.3-37.4 0-51.7zM221 241.8c-26.8-26.8-70.2-26.8-96.9 0s-26.8 70.2 0 96.9L201.4 416c12.5 12.5 32.8 12.5 45.3 0l77.3-77.3c26.8-26.8 26.8-70.2 0-96.9s-70.2-26.8-96.9 0l-3 3-3-3z" />
    </Icon>
);

export default BoxHeart;
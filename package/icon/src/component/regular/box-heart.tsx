
import { Icon } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=regular box-heart}
 * @preview ![box-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box-heart.svg)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 80l94.4 0c6.3 0 12.1 3.7 14.6 9.5L388.4 160 248 160l0-80zM48 208l352 0 0 208c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-208zm152-48L59.6 160 91 89.5c2.6-5.8 8.3-9.5 14.6-9.5L200 80l0 80zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70zM212.7 404.7c6.2 6.2 16.4 6.2 22.6 0l77.3-77.3c20.5-20.5 20.5-53.8 0-74.3s-53.8-20.5-74.3 0L224 267.4l-14.3-14.3c-20.5-20.5-53.8-20.5-74.3 0s-20.5 53.8 0 74.3l77.3 77.3z" />
    </Icon>
);

export default BoxHeart;
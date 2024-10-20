
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-star` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=duotone square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM79.4 209c-1.9 5.8-.3 12.1 4 16.4l58.6 57.2c-4.6 26.9-9.2 53.8-13.8 80.7c-1 6 1.4 12.1 6.4 15.6c2.8 2 6.1 3.1 9.4 3.1c2.5 0 5.1-.6 7.4-1.8c24.2-12.7 48.3-25.4 72.5-38.1c24.2 12.7 48.3 25.4 72.5 38.1c2.3 1.2 4.9 1.8 7.4 1.8c3.3 0 6.6-1 9.4-3.1c4.9-3.6 7.4-9.6 6.4-15.6c-4.6-26.9-9.2-53.8-13.8-80.7l58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9c-27-3.9-54-7.9-81-11.8c-12.1-24.5-24.2-49-36.2-73.4c-2.7-5.5-8.3-8.9-14.3-8.9s-11.7 3.5-14.3 8.9c-12.1 24.5-24.2 49-36.2 73.4c-27 3.9-54 7.9-81.1 11.8c-6 .9-11 5.1-12.9 10.9z" />
        <path d="M238.3 112.9c-2.7-5.5-8.3-8.9-14.3-8.9s-11.7 3.5-14.3 8.9l-36.2 73.4L92.4 198.1c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.9 1.2L224 342.1l72.5 38.1c5.4 2.8 11.9 2.4 16.8-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81-11.8-36.2-73.4z" />
    </Icon>
);

export default SquareStar;
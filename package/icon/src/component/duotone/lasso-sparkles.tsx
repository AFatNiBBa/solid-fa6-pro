
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lasso-sparkles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lasso-sparkles?s=duotone lasso-sparkles}
 * @preview ![lasso-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lasso-sparkles.svg)
 */
const LassoSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 57.2 44.7 108.1 113.9 140.2l-.2 .4L160.5 340c19.3 9.7 31.5 29.4 31.5 51c0 31.5-25.5 57-57 57l-71 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l71 0c66.8 0 121-54.2 121-121c0-14.1-2.4-27.8-7-40.6c12.8 1.1 25.8 1.6 39 1.6c159.1 0 288-78.8 288-176c0-76.4-79.6-141.4-191-165.8l5.6 15.1 26 9.6C435.5 42 448 59.9 448 80c0 5.6-1 11.1-2.8 16.2C486.4 116.5 512 144.8 512 176c0 61.9-100.3 112-224 112S64 237.9 64 176c0-51 68.2-94 161.4-107.6c3.8-15.2 14.8-27.9 29.9-33.4l26-9.6L290.7 0c-.9 0-1.8 0-2.7 0C128.9 0 0 78.8 0 176z" />
        <path d="M336 0c6.7 0 12.7 4.2 15 10.4l14.7 39.8L405.6 65c6.3 2.3 10.4 8.3 10.4 15s-4.2 12.7-10.4 15l-39.8 14.7L351 149.6c-2.3 6.3-8.3 10.4-15 10.4s-12.7-4.2-15-10.4l-14.7-39.8L266.4 95c-6.3-2.3-10.4-8.3-10.4-15s4.2-12.7 10.4-15l39.8-14.7L321 10.4C323.3 4.2 329.3 0 336 0zM496 352c6.7 0 12.7 4.2 15 10.4l14.7 39.8L565.6 417c6.3 2.3 10.4 8.3 10.4 15s-4.2 12.7-10.4 15l-39.8 14.7L511 501.6c-2.3 6.3-8.3 10.4-15 10.4s-12.7-4.2-15-10.4l-14.7-39.8L426.4 447c-6.3-2.3-10.4-8.3-10.4-15s4.2-12.7 10.4-15l39.8-14.7L481 362.4c2.3-6.3 8.3-10.4 15-10.4z" />
    </Icon>
);

export default LassoSparkles;
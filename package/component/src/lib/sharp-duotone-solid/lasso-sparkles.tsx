
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lasso-sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lasso-sparkles?s=sharp-duotone-solid lasso-sparkles}
 * @preview ![lasso-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lasso-sparkles.svg)
 */
const LassoSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 56 42.8 105.9 109.6 138.2c1.3 .9 2.7 1.7 4.1 2.5L160.5 340c19.3 9.7 31.5 29.4 31.5 51c0 31.5-25.5 57-57 57l-71 0-32 0 0 64 32 0 71 0c66.8 0 121-54.2 121-121c0-14.1-2.4-27.8-7-40.6c12.8 1.1 25.8 1.6 39 1.6c159.1 0 288-78.8 288-176C576 88.3 471.1 15.6 333.8 2.2l26.7 53.3 61.2 30.6c17.5 6.5 33 14.3 46 23l5.7 2.9-.9 .5C497.4 130.5 512 152.4 512 176c0 61.9-100.3 112-224 112S64 237.9 64 176c0-50 65.6-92.4 156.1-106.8l27.4-13.7L275.2 .2C122.1 4.3 0 81.4 0 176z" />
        <path d="M304 32L277.3 85.3 224 112l53.3 26.7L304 192l26.7-53.3L384 112 330.7 85.3 304 32zM496 352l-26.7 53.3L416 432l53.3 26.7L496 512l26.7-53.3L576 432l-53.3-26.7L496 352z" />
    </Icon>
);

export default LassoSparkles;
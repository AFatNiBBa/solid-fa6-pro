
import { Icon, generic } from "../../index";

/**
 * A component that renders the `corn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corn?s=sharp-duotone-solid corn}
 * @preview ![corn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/corn.svg)
 */
const Corn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M207.1 113.3c29.7 47.7 41.1 103.6 34.2 157.5c53.9-6.9 109.8 4.5 157.5 34.2c10.4-7.2 17.3-19.3 17.3-32.9c0-5.7-1.2-11.2-3.4-16.1c1.1 .1 2.2 .1 3.4 .1c22.1 0 40-17.9 40-40c0-6.4-1.5-12.4-4.2-17.8c16.3-5 28.2-20.2 28.2-38.2c0-6.4-1.5-12.4-4.2-17.8c16.3-5 28.2-20.2 28.2-38.2c0-11.4-4.8-21.8-12.5-29.1C503.7 68.1 512 55 512 40c0-22.1-17.9-40-40-40c-15 0-28.1 8.3-34.9 20.5C429.8 12.8 419.4 8 408 8c-18 0-33.2 11.8-38.2 28.2C364.4 33.5 358.4 32 352 32c-18 0-33.2 11.8-38.2 28.2C308.4 57.5 302.4 56 296 56c-22.1 0-40 17.9-40 40c0 1.1 0 2.3 .1 3.4C251.2 97.2 245.7 96 240 96c-13.6 0-25.7 6.8-32.9 17.3z" />
        <path d="M139.9 82.5L112 208 0 320v64l28.7 28.7 73.6-73.6c30.4-30.4 66.9-50.9 105.5-61.6c11.8-65-7.4-134.4-57.5-184.6L139.9 82.5zM51.3 435.3L128 512h64L304 400l125.5-27.9-10.4-10.4c-52.6-52.6-126.4-71.2-194-55.6c-36.7 8.5-71.5 27-100.1 55.6L51.3 435.3z" />
    </Icon>
);

export default Corn;
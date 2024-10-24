
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=duotone pen-slash}
 * @preview ![pen-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-slash.svg)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 488c0 6.3 2.5 12.4 7 17s10.7 7 17 7c2.3 0 4.5-.3 6.8-1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2l88.6-88.6L195.8 250.3l-73.2 73.2c-10.4 10.4-18 23.3-22.2 37.4L65 481.2c-.7 2.2-1 4.5-1 6.8zM264.3 181.8c48.6 38.1 97.1 76.1 145.7 114.2l75.7-75.7L355.7 90.3l-91.5 91.5zM378.3 67.7L508.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L517.3 19.3C504.8 6.8 488.4 .6 472 .6s-32.8 6.2-45.3 18.7L378.3 67.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PenSlash;
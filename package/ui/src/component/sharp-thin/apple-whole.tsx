
import { Icon } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=sharp-thin apple-whole}
 * @preview ![apple-whole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/apple-whole.svg)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 96c35.3 0 64-28.7 64-64l0-16-16 0c-35.3 0-64 28.7-64 64l0 16 16 0zm-32 16l0-16 0-16c0-44.2 35.8-80 80-80l16 0 16 0 0 16 0 16c0 44.2-35.8 80-80 80l-16 0-16 0zm-96 16l112 32 112-32c76.3 0 112 83.7 112 160c0 128-80 224-160 224l-64-16-64 16C80 512 0 416 0 288c0-76.3 35.7-160 112-160zm116.4 47.4l-4.4 1.3-4.4-1.3L109.9 144c-30.1 .8-52.8 17.3-68.8 43.7C24.5 215.1 16 252 16 288c0 60.7 19 113.3 46.8 150.4c27.5 36.6 62.4 56.8 95.3 57.6l62-15.5 3.9-1 3.9 1 62 15.5c32.9-.7 67.8-20.9 95.3-57.6C413 401.3 432 348.7 432 288c0-36-8.5-72.9-25.1-100.3c-16-26.3-38.6-42.9-68.8-43.7L228.4 175.4z" />
    </Icon>
);

export default AppleWhole;
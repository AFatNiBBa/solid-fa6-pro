
import { Icon } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=regular fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32l0 96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32C301.5 124.9 292 115.7 289 104l-89 0 0 26.6c50.3 11 88 55.8 88 109.4l0 208c0 35.3-28.7 64-64 64l-96 0c-35.3 0-64-28.7-64-64l0-208c0-53.6 37.7-98.4 88-109.4l0-25.6c-46.9 5.5-86.5 34.8-106.3 75.6c-5.8 11.9-20.2 16.9-32.1 11.1S-3.3 171.4 2.5 159.5C30.1 102.8 86.1 62.4 152 56.7L152 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 89 0c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM112 416l0 32c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-32-128 0zm0-48l128 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128z" />
    </Icon>
);

export default FireExtinguisher;
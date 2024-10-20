
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=light box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 64l102.4 0c12.6 0 24.1 7.4 29.2 19l34.2 77L240 160l0-96zm0 128l176 0 0 224c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-224 176 0 32 0zm-32-32L42.1 160 76.3 83c5.1-11.6 16.6-19 29.2-19L208 64l0 96zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70zM331.3 251.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 345.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" />
    </Icon>
);

export default BoxCheck;
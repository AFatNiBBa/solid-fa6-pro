
import { Icon } from "../../index";

/**
 * A component that renders the `heart-circle-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-minus?s=sharp-light heart-circle-minus}
 * @preview ![heart-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heart-circle-minus.svg)
 */
const HeartCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 141.3l-22.6-22.6L209.1 94.4C189.7 74.9 163.3 64 135.8 64C78.5 64 32 110.5 32 167.8c0 27.5 10.9 53.9 30.4 73.4l24.2 24.2L256 434.8l9.5-9.5c3.7 10.9 8.5 21.3 14.2 31.1l-1.1 1.1L256 480l-22.6-22.6L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l1.6 1.6L256 96l22.6-22.6 1.6-1.6c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 13.8-2.1 27.4-6.2 40.4c-9.6-4.5-19.7-8.1-30.2-10.7c2.9-9.5 4.3-19.5 4.3-29.7C480 110.5 433.5 64 376.2 64c-27.5 0-53.9 10.9-73.4 30.4l-24.2 24.2L256 141.3zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm80 160l-16 0-128 0-16 0 0-32 16 0 128 0 16 0 0 32z" />
    </Icon>
);

export default HeartCircleMinus;
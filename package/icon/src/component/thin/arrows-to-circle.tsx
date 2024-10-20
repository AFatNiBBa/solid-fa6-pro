
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=thin arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13.7 2.3C10.5-.8 5.5-.8 2.3 2.3s-3.1 8.2 0 11.3L164.7 176 72 176c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0c4.4 0 8-3.6 8-8l0-112c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 92.7L13.7 2.3zm612.7 0L464 164.7 464 72c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8l112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-92.7 0L637.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0zM320 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm136 96c4.4 0 8-3.6 8-8l0-92.7L626.3 509.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L475.3 336l92.7 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-112 0c-4.4 0-8 3.6-8 8l0 112c0 4.4 3.6 8 8 8zm-272 0c4.4 0 8-3.6 8-8l0-112c0-4.4-3.6-8-8-8L72 320c-4.4 0-8 3.6-8 8s3.6 8 8 8l92.7 0L2.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L176 347.3l0 92.7c0 4.4 3.6 8 8 8z" />
    </Icon>
);

export default ArrowsToCircle;
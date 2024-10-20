
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=regular skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c13.3 0 24 10.7 24 24l0 40 144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0 0 48 208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0 0 48 112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0 0 85.7 75.5-32.3c8.3-3.5 17.2-5.4 26.1-5.4c36.7 0 66.4 29.7 66.4 66.4l0 1.5c0 18-7.2 35.3-19.9 48l-25.8 25.8c-11.7 11.7-27.6 18.3-44.1 18.3l-204.3 0c-16.6 0-32.4-6.6-44.1-18.3L83.9 467.9c-12.7-12.7-19.9-30-19.9-48l0-1.5c0-36.7 29.7-66.4 66.4-66.4c9 0 17.9 1.8 26.1 5.4L232 389.7l0-85.7-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0 0-48L24 208c-13.3 0-24-10.7-24-24s10.7-24 24-24l208 0 0-48L88 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l144 0 0-40c0-13.3 10.7-24 24-24zM184 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm192 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Skeleton;

import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=regular h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88L0 248 0 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-152 224 0 0 152c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136L48 224 48 88zM440 64c-11.4 0-21.3 8.1-23.5 19.3l-32 160c-1.4 7.1 .4 14.4 5 19.9s11.4 8.8 18.6 8.8l120 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-63.6 0c-13.8 0-26-8.8-30.4-21.9l-3.2-9.7c-4.2-12.6-17.8-19.4-30.4-15.2s-19.4 17.8-15.2 30.4l3.2 9.7C399.4 426 429.9 448 464.4 448l63.6 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-90.7 0 22.4-112L584 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L440 64z" />
    </Icon>
);

export default H5;
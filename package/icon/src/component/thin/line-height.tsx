
import { Icon } from "../../index";

/**
 * A component that renders the `line-height` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-height?s=thin line-height}
 * @preview ![line-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/line-height.svg)
 */
const LineHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M101.4 34.1c-3.1-2.8-7.7-2.8-10.8 0l-88 80c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3 .5L88 58.1l0 395.8L13.4 386.1c-3.3-3-8.3-2.7-11.3 .5s-2.7 8.3 .5 11.3l88 80c3.1 2.8 7.7 2.8 10.8 0l88-80c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5L104 453.9l0-395.8 74.6 67.8c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3l-88-80zM264 88c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L264 88zm-8 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l312 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-312 0zm0 168c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default LineHeight;
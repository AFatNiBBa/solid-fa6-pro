
import { Icon } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=thin house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M330.8 1.9c3-2.6 7.4-2.6 10.4 0l232 200c3.3 2.9 3.7 7.9 .8 11.3s-7.9 3.7-11.3 .8L512 170.3 512 360c0 30.9-25.1 56-56 56l-177.9 0c-1.5-5.4-3.2-10.7-5.1-16l183 0c22.1 0 40-17.9 40-40l0-203.5L336 18.6 176 156.5l0 115.6c-5.2-3.7-10.5-7.2-16-10.4l0-91.4-50.8 43.8c-3.3 2.9-8.4 2.5-11.3-.8s-2.5-8.4 .8-11.3l232-200zM296 176l80 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24zm-8 24l0 80c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-80c0-4.4-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zM8 256c137 0 248 111 248 248c0 4.4-3.6 8-8 8s-8-3.6-8-8C240 375.9 136.1 272 8 272c-4.4 0-8-3.6-8-8s3.6-8 8-8zM48 480a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 480a32 32 0 1 1 64 0A32 32 0 1 1 0 480zM0 360c0-4.4 3.6-8 8-8c83.9 0 152 68.1 152 152c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-75.1-60.9-136-136-136c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default HouseSignal;
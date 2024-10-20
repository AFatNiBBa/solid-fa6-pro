
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=thin down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M216 336l81.1 0c3.8 0 6.9 3.1 6.9 6.9c0 1.8-.7 3.5-1.9 4.7L161.9 495.2c-.5 .5-1.2 .8-1.9 .8s-1.4-.3-1.9-.8L17.9 347.6c-1.2-1.3-1.9-3-1.9-4.7c0-3.8 3.1-6.9 6.9-6.9l81.1 0c8.8 0 16-7.2 16-16l0-280c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 280c0 8.8 7.2 16 16 16zM173.5 506.2L313.7 358.6c4-4.2 6.3-9.9 6.3-15.8c0-12.6-10.2-22.9-22.9-22.9L232 320l-16 0 0-16 0-264c0-22.1-17.9-40-40-40L144 0c-22.1 0-40 17.9-40 40l0 264 0 16-16 0-65.1 0C10.2 320 0 330.2 0 342.9c0 5.9 2.3 11.5 6.3 15.8L146.5 506.2c3.5 3.7 8.4 5.8 13.5 5.8s10-2.1 13.5-5.8z" />
    </Icon>
);

export default DownLong;
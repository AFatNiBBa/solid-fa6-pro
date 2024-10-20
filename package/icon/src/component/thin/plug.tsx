
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=thin plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 104 16 0L112 8zM288 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 104 16 0L288 8zM8 144c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 0 80c0 81.3 63.8 147.6 144 151.8L184 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112.2c80.2-4.2 144-70.5 144-151.8l0-80 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-32 0-16 0L56 144l-16 0L8 144zM192 376c-75.1 0-136-60.9-136-136l0-80 272 0 0 80c0 75.1-60.9 136-136 136z" />
    </Icon>
);

export default Plug;
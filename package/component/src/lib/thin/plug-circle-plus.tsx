
import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-plus?s=thin plug-circle-plus}
 * @preview ![plug-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/plug-circle-plus.svg)
 */
const PlugCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-224c-4.4 0-8 3.6-8 8l0 64-64 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0 0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-64 64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0 0-64c0-4.4-3.6-8-8-8zM104 0c4.4 0 8 3.6 8 8l0 104-16 0L96 8c0-4.4 3.6-8 8-8zM280 0c4.4 0 8 3.6 8 8l0 104-16 0L272 8c0-4.4 3.6-8 8-8zM0 152c0-4.4 3.6-8 8-8l32 0 16 0 272 0 16 0 32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-32 0 0 55.5c-5.5 3.2-10.9 6.7-16 10.5l0-66L56 160l0 80c0 75.1 60.9 136 136 136c23.2 0 45.1-5.8 64.2-16.1c-.1 2.7-.2 5.4-.2 8.1c0 3.3 .1 6.5 .3 9.8c-17.2 8.1-36.2 13-56.3 14L200 504c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-112.2C103.8 387.6 40 321.3 40 240l0-80L8 160c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default PlugCirclePlus;
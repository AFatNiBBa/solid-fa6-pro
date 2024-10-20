
import { Icon } from "../../index";

/**
 * A component that renders the `cabin` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=regular cabin}
 * @preview ![cabin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cabin.svg)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 54.1L95.3 176l321.3 0L256 54.1zM231.8 12.2c14.3-10.8 34.1-10.8 48.4 0L432 127.4 432 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 107.8 22.5 17.1c8.2 6.2 11.5 17 8.2 26.8s-12.4 16.3-22.7 16.3L24 224c-10.3 0-19.5-6.6-22.7-16.3s0-20.5 8.2-26.8L231.8 12.2zM32 296c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 320c-13.3 0-24-10.7-24-24zm0 192c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 512c-13.3 0-24-10.7-24-24zM56 368l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 416c-13.3 0-24-10.7-24-24s10.7-24 24-24zm264-72c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24zm24 168l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-24-72c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24zM224 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Cabin;
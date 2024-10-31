
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=regular van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 96l0 96 128 0 0-112L64 80c-8.8 0-16 7.2-16 16zm0 144l0 80c0 8.8 7.2 16 16 16l12.8 0c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48l153.7 0c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48l12.8 0c8.8 0 16-7.2 16-16l0-80-232 0-160 0L48 240zm176-48l112 0 0-112L224 80l0 112zm160 0l180.1 0L471.3 82.8c-1.5-1.8-3.7-2.8-6.1-2.8L384 80l0 112zM640 320c0 35.3-28.7 64-64 64c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l136 0 160 0 105.2 0c16.4 0 32 7.2 42.7 19.7L626.7 191.5c8.6 10.1 13.3 23 13.3 36.3l0 92.2zM528 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default VanShuttle;
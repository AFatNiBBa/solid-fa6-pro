
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=thin shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M410.3 2.3c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3l-37.8 37.8c-13.2 13.2-31 20.6-49.7 20.6c-16.5 0-31.7-5.7-43.7-15.2L229.7 293.7l67.7 67.7c12.5 12.5 12.5 32.8 0 45.3l-58.5 58.5c-30 30-70.7 46.9-113.1 46.9L32 512c-17.7 0-32-14.3-32-32l0-93.7c0-42.4 16.9-83.1 46.9-113.1l58.5-58.5c12.5-12.5 32.8-12.5 45.3 0l67.7 67.7L367.2 133.5c-9.5-12-15.2-27.2-15.2-43.7c0-18.6 7.4-36.5 20.6-49.7L410.3 2.3zm5.7 17L383.9 51.4C373.7 61.6 368 75.4 368 89.8c0 29.9 24.3 54.2 54.2 54.2c14.4 0 28.2-5.7 38.3-15.9L492.7 96 416 19.3zM16 480c0 8.8 7.2 16 16 16l93.7 0c38.2 0 74.8-15.2 101.8-42.2l58.5-58.5c6.2-6.2 6.2-16.4 0-22.6L139.3 225.9c-6.2-6.2-16.4-6.2-22.6 0L58.2 284.5c-27 27-42.2 63.6-42.2 101.8L16 480z" />
    </Icon>
);

export default Shovel;
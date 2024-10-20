
import { Icon } from "../../index";

/**
 * A component that renders the `desktop-arrow-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop-arrow-down?s=light desktop-arrow-down}
 * @preview ![desktop-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/desktop-arrow-down.svg)
 */
const DesktopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 0L240 0l0 32L64 32C46.3 32 32 46.3 32 64l0 192 512 0 0-192c0-17.7-14.3-32-32-32L336 32l0-32L512 0c35.3 0 64 28.7 64 64l0 192 0 32 0 64c0 35.3-28.7 64-64 64l-149.1 0 10.7 64 58.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-72 0-144 0-72 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l58.4 0 10.7-64L64 416c-35.3 0-64-28.7-64-64l0-64 0-32L0 64C0 28.7 28.7 0 64 0zM32 288l0 64c0 17.7 14.3 32 32 32l167.7 0c.2 0 .4 0 .6 0l111.5 0c.2 0 .4 0 .6 0L512 384c17.7 0 32-14.3 32-32l0-64L32 288zM234.9 480l106.2 0-10.7-64-84.9 0-10.7 64zM304 16l0 153.4 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L272 169.4 272 16c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default DesktopArrowDown;

import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-plus?s=regular plug-circle-plus}
 * @preview ![plug-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/plug-circle-plus.svg)
 */
const PlugCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16zM104 0c13.3 0 24 10.7 24 24l0 88-48 0 0-88C80 10.7 90.7 0 104 0zM280 0c13.3 0 24 10.7 24 24l0 88-48 0 0-88c0-13.3 10.7-24 24-24zM0 168c0-13.3 10.7-24 24-24l8 0 48 0 224 0 48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 19.2c-18 9.2-34.2 21.4-48 36l0-55.2L80 192l0 64c0 61.9 50.1 112 112 112c24.3 0 46.9-7.8 65.2-20.9c-.8 6.9-1.2 13.9-1.2 20.9c0 11.4 1.1 22.5 3.1 33.3c-13.5 6.2-28 10.7-43.1 12.9l0 73.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-73.8C91 402.6 32 336.2 32 256l0-64-8 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default PlugCirclePlus;
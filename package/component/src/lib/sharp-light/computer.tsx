
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=sharp-light computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 64l0 288-140.5 0L264 352l-80 0-11.5 0L32 352 32 64l384 0zM32 384l129.8 0-21.3 64L64 448l0 32 65.8 0 22.2 0 144 0 22.2 0 65.8 0 0-32-76.5 0-21.3-64L416 384l32 0 0-32 0-288 0-32-32 0L32 32 0 32 0 64 0 352l0 32 32 0zm142.2 64l21.3-64 56.9 0 21.3 64-99.6 0zM512 64l96 0 0 64-96 0 0-64zm0 96l96 0 0 32-96 0 0-32zm0 288l0-224 96 0 0 224-96 0zM480 32l0 32 0 384 0 32 32 0 96 0 32 0 0-32 0-384 0-32-32 0-96 0-32 0zm80 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Computer;
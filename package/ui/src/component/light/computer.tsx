
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=light computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-108.5 0L264 352l-80 0-11.5 0L64 352c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 384l97.8 0-21.3 64L80 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l49.8 0 22.2 0 144 0 22.2 0 49.8 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-60.5 0-21.3-64 97.8 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64zm110.2 64l21.3-64 56.9 0 21.3 64-99.6 0zM528 64l64 0c8.8 0 16 7.2 16 16l0 48-96 0 0-48c0-8.8 7.2-16 16-16zm-16 96l96 0 0 32-96 0 0-32zm0 272l0-208 96 0 0 208c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zM480 80l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48zm80 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Computer;
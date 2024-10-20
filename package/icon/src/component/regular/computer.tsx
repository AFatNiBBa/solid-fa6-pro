
import { Icon } from "../../index";

/**
 * A component that renders the `computer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=regular computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-102.7 0L264 336l-80 0-17.3 0L64 336c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 384l86.7 0-16 48L88 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l30.7 0 33.3 0 144 0 33.3 0 30.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-46.7 0-16-48 86.7 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64zm121.3 48l16-48 45.4 0 16 48-77.4 0zM528 80l64 0 0 32-64 0 0-32zm0 80l64 0 0 32-64 0 0-32zm64 80l0 192-64 0 0-192 64 0zM480 80l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48zm80 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Computer;
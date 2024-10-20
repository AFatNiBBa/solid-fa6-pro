
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-predecessor` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-predecessor?s=solid diagram-predecessor}
 * @preview ![diagram-predecessor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/diagram-predecessor.svg)
 */
const DiagramPredecessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 416l0-64L64 352l0 64 384 0zm0 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64zM288 160c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l144 0 16 0 144 0c44.2 0 80 35.8 80 80l0 16 38.1 0c21.4 0 32.1 25.9 17 41L433 239c-9.4 9.4-24.6 9.4-33.9 0L329 169c-15.1-15.1-4.4-41 17-41l38.1 0 0-16c0-8.8-7.2-16-16-16l-80 0 0 64z" />
    </Icon>
);

export default DiagramPredecessor;
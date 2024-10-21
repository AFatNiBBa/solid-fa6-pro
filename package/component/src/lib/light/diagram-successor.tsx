
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=light diagram-successor}
 * @preview ![diagram-successor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diagram-successor.svg)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 352c0-17.7-14.3-32-32-32L64 320c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64zm32 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64zM256 96c0-17.7-14.3-32-32-32l-32 0L64 64C46.3 64 32 78.3 32 96l0 64c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-64zm23.4-32c5.4 9.4 8.6 20.3 8.6 32l0 64c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l128 0 32 0 144 0c35.3 0 64 28.7 64 64l0 89.4 36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L400 185.4 400 96c0-17.7-14.3-32-32-32l-88.6 0zM96 368l320 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 400c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default DiagramSuccessor;
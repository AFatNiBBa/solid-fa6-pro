
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=light diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 160c0 17.7-14.3 32-32 32l-176 0-32 0L64 192c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 64zM272 224l176 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l176 0 0 105.4-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l64-64c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 329.4 272 224zM448 480c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0z" />
    </Icon>
);

export default DiagramNext;
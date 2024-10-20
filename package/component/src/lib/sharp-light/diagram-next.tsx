
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=sharp-light diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 192l-208 0-32 0L32 192 32 64l448 0 0 128zM272 224l208 0 32 0 0-32 0-128 0-32-32 0L32 32 0 32 0 64 0 192l0 32 32 0 208 0 0 105.4-36.7-36.7L192 281.4 169.4 304l11.3 11.3 64 64L256 390.6l11.3-11.3 64-64L342.6 304 320 281.4l-11.3 11.3L272 329.4 272 224zM512 480l0-16 0-160 0-16-16 0-96 0-16 0 0 32 16 0 80 0 0 128L32 448l0-128 80 0 16 0 0-32-16 0-96 0L0 288l0 16L0 464l0 16 16 0 480 0 16 0z" />
    </Icon>
);

export default DiagramNext;
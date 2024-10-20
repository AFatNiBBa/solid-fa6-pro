
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=sharp-thin diagram-next}
 * @preview ![diagram-next](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-next.svg)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 208L16 208 16 48l480 0 0 160zm16 16l0-16 0-160 0-16-16 0L16 32 0 32 0 48 0 208l0 16 16 0 232 0 0 124.7-50.3-50.3-5.7-5.7L180.7 304l5.7 5.7 64 64 5.7 5.7 5.7-5.7 64-64 5.7-5.7L320 292.7l-5.7 5.7L264 348.7 264 224l232 0 16 0zm0 248l0-176 0-8-8 0-104 0-8 0 0 16 8 0 96 0 0 160L16 464l0-160 96 0 8 0 0-16-8 0L8 288l-8 0 0 8L0 472l0 8 8 0 496 0 8 0 0-8z" />
    </Icon>
);

export default DiagramNext;
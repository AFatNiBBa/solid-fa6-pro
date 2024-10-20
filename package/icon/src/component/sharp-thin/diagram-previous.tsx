
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=sharp-thin diagram-previous}
 * @preview ![diagram-previous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-previous.svg)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 304L16 304l0 160 480 0 0-160zm16-16l0 16 0 160 0 16-16 0L16 480 0 480l0-16L0 304l0-16 16 0 232 0 0-124.7-50.3 50.3-5.7 5.7L180.7 208l5.7-5.7 64-64 5.7-5.7 5.7 5.7 64 64 5.7 5.7L320 219.3l-5.7-5.7L264 163.3 264 288l232 0 16 0zm0-248l0 176 0 8-8 0-104 0-8 0 0-16 8 0 96 0 0-160L16 48l0 160 96 0 8 0 0 16-8 0L8 224l-8 0 0-8L0 40l0-8 8 0 496 0 8 0 0 8z" />
    </Icon>
);

export default DiagramPrevious;

import { Icon } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=sharp-thin diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48l0 160L16 208 16 48l480 0zM16 32L0 32 0 48 0 208l0 16 16 0 104 0 0 160 0 8 8 0 96 0 0 72 0 16 16 0 256 0 16 0 0-16 0-160 0-16-16 0-256 0-16 0 0 16 0 72-88 0 0-152 360 0 16 0 0-16 0-160 0-16-16 0L16 32zM496 304l0 160-256 0 0-160 256 0z" />
    </Icon>
);

export default DiagramSubtask;

import { Icon } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=solid diagram-subtask}
 * @preview ![diagram-subtask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/diagram-subtask.svg)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-288 0 0 96c0 17.7 14.3 32 32 32l32 0c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-160 0c-35.3 0-64-28.7-64-64l-32 0c-53 0-96-43-96-96l0-96-32 0c-35.3 0-64-28.7-64-64L0 96zM448 352l-160 0 0 64 160 0 0-64z" />
    </Icon>
);

export default DiagramSubtask;
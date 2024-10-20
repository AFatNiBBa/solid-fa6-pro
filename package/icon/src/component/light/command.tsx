
import { Icon } from "../../index";

/**
 * A component that renders the `command` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=light command}
 * @preview ![command](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/command.svg)
 */
const Command: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0s88 39.4 88 88l0 56 160 0 0-56c0-48.6 39.4-88 88-88s88 39.4 88 88s-39.4 88-88 88l-56 0 0 160 56 0c48.6 0 88 39.4 88 88s-39.4 88-88 88s-88-39.4-88-88l0-56-160 0 0 56c0 48.6-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88l56 0 0-160-56 0C39.4 176 0 136.6 0 88zm144 56l0-56c0-30.9-25.1-56-56-56S32 57.1 32 88s25.1 56 56 56l56 0zm32 192l160 0 0-160-160 0 0 160zm-32 32l-56 0c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56l0-56zm224 0l0 56c0 30.9 25.1 56 56 56s56-25.1 56-56s-25.1-56-56-56l-56 0zm0-224l56 0c30.9 0 56-25.1 56-56s-25.1-56-56-56s-56 25.1-56 56l0 56z" />
    </Icon>
);

export default Command;
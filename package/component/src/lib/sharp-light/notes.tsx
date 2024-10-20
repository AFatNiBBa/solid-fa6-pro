
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-light notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 416l-32 0 0-32L96 64l0-32 32 0 320 0 32 0 0 32 0 240L368 416l-240 0zm226.7-32L448 290.7l0-2.7-96 0 0 96 2.7 0zM320 384l0-112 0-16 16 0 112 0 0-192L128 64l0 320 192 0zm0 96l0 32-16 0L16 512 0 512l0-16L0 144l0-16 32 0 0 16 0 336 272 0 16 0z" />
    </Icon>
);

export default Notes;
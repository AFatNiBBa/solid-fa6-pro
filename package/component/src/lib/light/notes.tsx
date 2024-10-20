
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=light notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 96c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 160-80 0c-26.5 0-48 21.5-48 48l0 80-160 0c-17.7 0-32-14.3-32-32l0-256zM446.2 288c-1.6 4.5-4.2 8.7-7.6 12.1l-74.5 74.5c-3.4 3.4-7.6 6-12.1 7.6l0-78.2c0-8.8 7.2-16 16-16l78.2 0zM96 96l0 256c0 35.3 28.7 64 64 64l181.5 0c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3L480 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM320 496c0-8.8-7.2-16-16-16l-176 0c-53 0-96-43-96-96l0-240c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 384c0 70.7 57.3 128 128 128l176 0c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default Notes;
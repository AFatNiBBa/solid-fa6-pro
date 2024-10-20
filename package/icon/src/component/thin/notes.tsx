
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=thin notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 96c0-26.5 21.5-48 48-48l256 0c26.5 0 48 21.5 48 48l0 181.5c0 3.6-.4 7.1-1.2 10.5L392 288c-22.1 0-40 17.9-40 40l0 70.8c-3.4 .8-6.9 1.2-10.5 1.2L160 400c-26.5 0-48-21.5-48-48l0-256zM456 304c-1.8 2.7-3.8 5.1-6.1 7.4l-74.5 74.5c-2.3 2.3-4.8 4.3-7.4 6.1l0-64c0-13.3 10.7-24 24-24l64 0zM96 96l0 256c0 35.3 28.7 64 64 64l181.5 0c17 0 33.3-6.7 45.3-18.7l74.5-74.5c12-12 18.7-28.3 18.7-45.3L480 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l0-16z" />
    </Icon>
);

export default Notes;
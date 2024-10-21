
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=regular notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 48l176 0c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16l-176 0 0-416zm-48 0l0 416-64 0c-8.8 0-16-7.2-16-16l0-32 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0 0-88 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0 0-88 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0 0-32c0-8.8 7.2-16 16-16l64 0zM64 416l0 32c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 32L24 96C10.7 96 0 106.7 0 120s10.7 24 24 24l40 0 0 88-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 88-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0z" />
    </Icon>
);

export default Notebook;
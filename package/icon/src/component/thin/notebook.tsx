
import { Icon } from "../../index";

/**
 * A component that renders the `notebook` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notebook?s=thin notebook}
 * @preview ![notebook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/notebook.svg)
 */
const Notebook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 16l208 0c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48l-208 0 0-480zm-16 0l0 480-64 0c-26.5 0-48-21.5-48-48l0-56 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0 0-112 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0 0-112 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0 0-56c0-26.5 21.5-48 48-48l64 0zM64 392l0 56c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 56L8 120c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 112L8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 112L8 376c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0z" />
    </Icon>
);

export default Notebook;
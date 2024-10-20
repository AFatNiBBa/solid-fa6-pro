
import { Icon } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=light code-merge}
 * @preview ![code-merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/code-merge.svg)
 */
const CodeMerge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM96.9 158.2C133 150.5 160 118.4 160 80c0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4l0 195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4l0-119.1c26.4 32.6 66.8 53.5 112 53.5l81.6 0c7.4 36.5 39.7 64 78.4 64c44.2 0 80-35.8 80-80s-35.8-80-80-80c-38.7 0-71 27.5-78.4 64L208 256c-57 0-104.1-42.6-111.1-97.8zM416 272a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM128 432a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default CodeMerge;

import { Icon } from "../../index";

/**
 * A component that renders the `code-branch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-branch?s=thin code-branch}
 * @preview ![code-branch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-branch.svg)
 */
const CodeBranch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm64-48c0 32.6-24.4 59.6-56 63.5l0 169c18.4-29.2 50.9-48.5 88-48.5l96 0c48.6 0 88-39.4 88-88l0-32.5c-31.6-3.9-56-30.9-56-63.5c0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5l0 32.5c0 57.4-46.6 104-104 104l-96 0c-48.6 0-88 39.4-88 88l0 16 0 16.5c31.6 3.9 56 30.9 56 63.5c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5L72 368l0-16 0-224.5C40.4 123.6 16 96.6 16 64C16 28.7 44.7 0 80 0s64 28.7 64 64zm272 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM80 496a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default CodeBranch;
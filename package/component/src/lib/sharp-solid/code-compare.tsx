
import { Icon } from "../../index";

/**
 * A component that renders the `code-compare` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-compare?s=sharp-solid code-compare}
 * @preview ![code-compare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/code-compare.svg)
 */
const CodeCompare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 320l-96 96 96 96 32 0 0-64 16 0c70.7 0 128-57.3 128-128l0-160 48 0 0-56 0-48 0-56L456 0 408 0 352 0l0 56 0 48 0 56 48 0 0 160c0 35.3-28.7 64-64 64l-16 0 0-64-32 0zM408 56l48 0 0 48-48 0 0-48zM224 0L192 0l0 64-16 0C105.3 64 48 121.3 48 192l0 160L0 352l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-48 0 0-160c0-35.3 28.7-64 64-64l16 0 0 64 32 0 96-96L224 0zM56 408l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default CodeCompare;
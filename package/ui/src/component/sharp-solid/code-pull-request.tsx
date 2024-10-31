
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=sharp-solid code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 56l48 0 0 48-48 0 0-48zM0 0L0 56l0 48 0 56 48 0 0 192L0 352l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-48 0 0-192 48 0 0-56 0-48 0-56L104 0 56 0 0 0zM56 408l48 0 0 48-48 0 0-48zm400 0l0 48-48 0 0-48 48 0zM400 192l0 160-48 0 0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-48 0 0-160c0-70.7-57.3-128-128-128l-16 0 0-64L288 0 192 96l96 96 32 0 0-64 16 0c35.3 0 64 28.7 64 64z" />
    </Icon>
);

export default CodePullRequest;

import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request-closed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-closed?s=sharp-solid code-pull-request-closed}
 * @preview ![code-pull-request-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/code-pull-request-closed.svg)
 */
const CodePullRequestClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M305.4 62.6L354.7 112l-49.4 49.4 45.3 45.3L400 157.3l49.4 49.4 45.3-45.3L445.3 112l49.4-49.4L449.4 17.4 400 66.7 350.6 17.4 305.4 62.6zM136 88l0 48-48 0 0-48 48 0zM88 32L32 32l0 56 0 48 0 56 48 0 0 160-48 0 0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-48 0 0-160 48 0 0-56 0-48 0-56-56 0L88 32zM432 288l0-32-64 0 0 32 0 64-48 0 0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-48 0 0-64zm-8 168l-48 0 0-48 48 0 0 48zM88 408l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default CodePullRequestClosed;
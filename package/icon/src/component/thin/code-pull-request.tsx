
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=thin code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64a48 48 0 1 1 96 0A48 48 0 1 1 32 64zm56 63.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64S16 28.7 16 64c0 32.6 24.4 59.6 56 63.5l0 257c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5l0-257zM32 448a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm400-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112c35.3 0 64-28.7 64-64c0-32.6-24.4-59.6-56-63.5L440 192c0-57.4-46.6-104-104-104l-91.3 0 72.7-66.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-88 80C217 91.6 216 93.7 216 96s1 4.4 2.6 5.9l88 80c3.3 3 8.3 2.7 11.3-.5s2.7-8.3-.5-11.3L244.7 104l91.3 0c48.6 0 88 39.4 88 88l0 192.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default CodePullRequest;

import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request-closed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-closed?s=thin code-pull-request-closed}
 * @preview ![code-pull-request-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-pull-request-closed.svg)
 */
const CodePullRequestClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 111.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64S48 28.7 48 64c0 32.6 24.4 59.6 56 63.5l0 257c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5l0-257zM330.3 10.3c-3.1 3.1-3.1 8.2 0 11.3L388.7 80l-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L400 91.3l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L411.3 80l58.3-58.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L400 68.7 341.7 10.3c-3.1-3.1-8.2-3.1-11.3 0zM64 448a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112c35.3 0 64-28.7 64-64c0-32.6-24.4-59.6-56-63.5L408 200c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 184.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default CodePullRequestClosed;
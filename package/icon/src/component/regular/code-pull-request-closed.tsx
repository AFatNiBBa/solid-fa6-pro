
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request-closed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-closed?s=regular code-pull-request-closed}
 * @preview ![code-pull-request-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/code-pull-request-closed.svg)
 */
const CodePullRequestClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 80A32 32 0 1 0 80 80a32 32 0 1 0 64 0zm48 0c0 35.8-23.5 66.1-56 76.3l0 199.3c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3l0-199.3C55.5 146.1 32 115.8 32 80C32 35.8 67.8 0 112 0s80 35.8 80 80zM112 464a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0 48c-44.2 0-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3L376 224c0-13.3 10.7-24 24-24s24 10.7 24 24l0 131.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80zM327 7c9.4-9.4 24.6-9.4 33.9 0l39 39L439 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-39 39 39 39c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39-39 39c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L327 41c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default CodePullRequestClosed;
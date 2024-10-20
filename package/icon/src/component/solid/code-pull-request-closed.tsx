
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request-closed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-closed?s=solid code-pull-request-closed}
 * @preview ![code-pull-request-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/code-pull-request-closed.svg)
 */
const CodePullRequestClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M329.4 9.4c12.5-12.5 32.8-12.5 45.3 0L400 34.7 425.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L445.3 80l25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L400 125.3l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 80 329.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zM136 80A24 24 0 1 0 88 80a24 24 0 1 0 48 0zm56 0c0 32.8-19.7 61-48 73.3l0 205.3c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-205.3C51.7 141 32 112.8 32 80C32 35.8 67.8 0 112 0s80 35.8 80 80zM112 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm288 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 56c-44.2 0-80-35.8-80-80c0-32.8 19.7-61 48-73.3L368 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 134.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80z" />
    </Icon>
);

export default CodePullRequestClosed;
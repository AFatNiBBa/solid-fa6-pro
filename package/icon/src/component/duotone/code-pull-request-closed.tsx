
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-pull-request-closed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-closed?s=duotone code-pull-request-closed}
 * @preview ![code-pull-request-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-pull-request-closed.svg)
 */
const CodePullRequestClosed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 153.3c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3c1.4 .1 2.8 .1 4.2 .1c11.4 0 22.2-2.4 32-6.7l0 205.3c-4.9-2.1-10.1-3.8-15.4-4.9c-2.7-.6-5.4-1-8.2-1.3c-1.4-.1-2.8-.3-4.2-.3s-2.8-.1-4.2-.1c-11.4 0-22.2 2.4-32 6.7l0-205.3zM368 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 134.7c-4.9-2.1-10.1-3.8-15.4-4.9c-2.7-.6-5.4-1-8.2-1.3c-1.4-.1-2.8-.3-4.2-.3s-2.8-.1-4.2-.1c-11.4 0-22.2 2.4-32 6.7L368 224z" />
        <path d="M329.4 9.4c12.5-12.5 32.8-12.5 45.3 0L400 34.7 425.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L445.3 80l25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L400 125.3l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L354.7 80 329.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zM136 80A24 24 0 1 0 88 80a24 24 0 1 0 48 0zM32 80a80 80 0 1 1 160 0A80 80 0 1 1 32 80zm80 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-104a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM400 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-104a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default CodePullRequestClosed;

import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request-closed` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-closed?s=light code-pull-request-closed}
 * @preview ![code-pull-request-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/code-pull-request-closed.svg)
 */
const CodePullRequestClosed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 80A48 48 0 1 0 64 80a48 48 0 1 0 96 0zm32 0c0 38.7-27.5 71-64 78.4l0 195.2c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4l0-195.2C59.5 151 32 118.7 32 80C32 35.8 67.8 0 112 0s80 35.8 80 80zM64 432a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm336 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM384 353.6L384 208c0-8.8 7.2-16 16-16s16 7.2 16 16l0 145.6c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4zM332.7 12.7c6.2-6.2 16.4-6.2 22.6 0L400 57.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L422.6 80l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L400 102.6l-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L377.4 80 332.7 35.3c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default CodePullRequestClosed;
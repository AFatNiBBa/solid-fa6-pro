
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=light code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path d="M323.8 5.2c5.9 6.5 5.5 16.7-1.1 22.6L265.4 80 336 80c61.9 0 112 50.1 112 112l0 161.6c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4L416 192c0-44.2-35.8-80-80-80l-70.6 0 57.4 52.2c6.5 5.9 7 16.1 1.1 22.6s-16.1 7-22.6 1.1l-88-80c-3.3-3-5.2-7.3-5.2-11.8s1.9-8.8 5.2-11.8l88-80c6.5-5.9 16.7-5.5 22.6 1.1zM432 384a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM128 80A48 48 0 1 0 32 80a48 48 0 1 0 96 0zM96 158.4l0 195.2c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4l0-195.2C27.5 151 0 118.7 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 38.7-27.5 71-64 78.4zM128 432a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CodePullRequest;
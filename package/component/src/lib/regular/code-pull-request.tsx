
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=regular code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path d="M305.8 2.1C314.4 5.9 320 14.5 320 24l0 48 16 0c66.3 0 120 53.7 120 120l0 163.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3L408 192c0-39.8-32.2-72-72-72l-16 0 0 48c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM112 80A32 32 0 1 0 48 80a32 32 0 1 0 64 0zm-8 76.3l0 199.3c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3l0-199.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3zM112 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm320 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CodePullRequest;
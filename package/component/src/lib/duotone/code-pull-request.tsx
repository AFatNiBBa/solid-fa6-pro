
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=duotone code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 153.3l0 205.3c9.8-4.3 20.6-6.7 32-6.7c1.4 0 2.8 0 4.2 .1s2.8 .2 4.2 .3c2.8 .3 5.5 .7 8.2 1.3c5.4 1.1 10.5 2.8 15.4 4.9l0-205.3c-9.8 4.3-20.6 6.7-32 6.7c-1.4 0-2.8 0-4.2-.1s-2.8-.2-4.2-.3c-2.8-.3-5.5-.7-8.2-1.3c-5.4-1.1-10.5-2.8-15.4-4.9zM192 96c0 6.8 2.9 13.3 7.9 17.8l80 72c7 6.3 17.2 7.9 25.8 4.1s14.2-12.4 14.2-21.9l0-40 16 0c35.3 0 64 28.7 64 64l0 166.7c9.8-4.3 20.6-6.7 32-6.7c1.4 0 2.8 0 4.2 .1s2.8 .2 4.2 .3c2.8 .3 5.5 .7 8.2 1.3c5.4 1.1 10.5 2.8 15.4 4.9L464 192c0-70.7-57.3-128-128-128l-16 0 0-40c0-9.5-5.6-18.1-14.2-21.9C302.6 .7 299.3 0 296 0c-5.8 0-11.6 2.1-16.1 6.2l-80 72c-5.1 4.6-7.9 11-7.9 17.8z" />
        <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160zm0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm328-80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CodePullRequest;
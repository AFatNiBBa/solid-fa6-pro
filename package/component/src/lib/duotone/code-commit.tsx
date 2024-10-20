
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=duotone code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l131.2 0c-2.1-10.3-3.2-21-3.2-32c0-1.4 0-2.7 .1-4.1s.1-2.7 .2-4.1c.1-2.7 .3-5.4 .6-8.1c.5-5.3 1.3-10.6 2.4-15.8L32 224c-17.7 0-32 14.3-32 32zm476.8-32c2.1 10.3 3.2 21 3.2 32c0 1.4 0 2.7-.1 4.1s-.1 2.7-.2 4.1c-.1 2.7-.3 5.4-.6 8.1c-.5 5.3-1.3 10.6-2.4 15.8L608 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-131.2 0z" />
        <path d="M320 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 240a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CodeCommit;
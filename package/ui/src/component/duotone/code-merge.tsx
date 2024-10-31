
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=duotone code-merge}
 * @preview ![code-merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-merge.svg)
 */
const CodeMerge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 153.3c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3c1.4 .1 2.8 .1 4.2 .1c11.5 0 22.5-2.4 32.4-6.8C117 201.9 158.1 240 208 240l86.7 0c-2.1 4.9-3.8 10.1-4.9 15.4c-.6 2.7-1 5.4-1.3 8.2c-.1 1.4-.3 2.8-.3 4.2s-.1 2.8-.1 4.2c0 11.4 2.4 22.2 6.7 32L208 304c-36 0-69.3-11.9-96-32l0 86.6c-4.9-2.1-10.1-3.8-15.4-4.9c-2.7-.6-5.4-1-8.2-1.3c-1.4-.1-2.8-.3-4.2-.3s-2.8-.1-4.2-.1c-11.4 0-22.2 2.4-32 6.7l0-205.3z" />
        <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160zm0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CodeMerge;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `grapes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grapes?s=duotone grapes}
 * @preview ![grapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grapes.svg)
 */
const Grapes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 72c0-29.7 17.6-55 26.7-66c3.3-4 8.2-6 13.3-6s10 2 13.2 6C382.3 17.4 400 44.3 400 80c0 32-8 40-8 40s8-8 40-8c35.7 0 62.6 17.7 74 26.8c4 3.2 6 8.1 6 13.2s-2 10-6 13.3C495 174.4 469.7 192 440 192c-40 0-55.3-15.3-80-40s-40-40-40-80z" />
        <path d="M248 208a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm-80-32A56 56 0 1 0 56 176a56 56 0 1 0 112 0zM88 368a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM56 512a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm144-32a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm192-80a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM224 344a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm192-80a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z" />
    </Icon>
);

export default Grapes;
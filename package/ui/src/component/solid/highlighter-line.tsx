
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter-line?s=solid highlighter-line}
 * @preview ![highlighter-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/highlighter-line.svg)
 */
const HighlighterLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M229 229l215-158.4 29.3 29.3L315 315 229 229zM128 320s0 0 0 0l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0L224 416l71.7 0c15.3 0 29.6-7.2 38.6-19.5L535.6 123.4c5.5-7.4 8.4-16.4 8.4-25.6c0-11.4-4.5-22.4-12.6-30.5L476.6 12.6C468.5 4.5 457.6 0 446.2 0C437 0 428 2.9 420.6 8.4L147.5 209.6c-12.3 9-19.5 23.4-19.5 38.6l0 71.7zM70.1 403.3l-63 63c-4.5 4.5-7 10.6-7 17L0 488c0 13.3 10.7 24 24 24l68.7 0c6.4 0 12.5-2.5 17-7l31-31L70.1 403.3zM224 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l328 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-328 0z" />
    </Icon>
);

export default HighlighterLine;
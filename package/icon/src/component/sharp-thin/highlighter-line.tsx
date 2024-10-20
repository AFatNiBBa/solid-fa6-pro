
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter-line?s=sharp-thin highlighter-line}
 * @preview ![highlighter-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/highlighter-line.svg)
 */
const HighlighterLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 416l-88.6 0-52.7 52.7L167.4 480l-11.3-11.3L75.3 387.9 64 376.6l11.3-11.3L128 312.6l0-88.6L464 0l80 80L320 416zm-99.9-11.3l4.7-4.7 6.6 0 80 0 30.9-46.4-152-152L144 232.6l0 80.1 0 6.6-4.7 4.7L86.6 376.6l80.8 80.8 52.7-52.7zm131.3-64.6l172-258L462 20.6l-258 172L351.4 340.1zM65.1 411.6l11.3 11.3L16 483.3 16 496l76.7 0 28.4-28.4 11.3 11.3-30.7 30.7L99.3 512 96 512 8 512l-8 0 0-8 0-24 0-3.3 2.3-2.3 62.7-62.7zM232 496l336 0 8 0 0 16-8 0-336 0-8 0 0-16 8 0z" />
    </Icon>
);

export default HighlighterLine;
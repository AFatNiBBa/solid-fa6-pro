
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=thin file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 496l-256 0c-26.5 0-48-21.5-48-48l0-96-16 0 0 96c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-96-16 0 0 96c0 26.5-21.5 48-48 48zm48-316.1l0 60.1 16 0 0-60.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 176 16 0 0-176c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L336 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9zM489.1 160L376 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L486.6 157.3c.9 .9 1.7 1.8 2.4 2.7zM40 288c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L40 288zm224 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-112 0zm192 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0z" />
    </Icon>
);

export default FileDashedLine;

import { Icon } from "../../index";

/**
 * A component that renders the `subtitles` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles?s=thin subtitles}
 * @preview ![subtitles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/subtitles.svg)
 */
const Subtitles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM112 272l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm256 0l96 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM112 368l96 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm160 0l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-192 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Subtitles;
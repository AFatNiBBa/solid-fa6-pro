
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-sparkles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-sparkles?s=duotone book-sparkles}
 * @preview ![book-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-sparkles.svg)
 */
const BookSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l-64 0-96 0L96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 96 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM264 200l-38.8 16.6c-6.5 2.8-6.5 11.9 0 14.7L264 248l16.6 38.8c2.8 6.5 11.9 6.5 14.7 0L312 248l38.8-16.6c6.5-2.8 6.5-11.9 0-14.7L312 200l-16.6-38.8c-2.8-6.5-11.9-6.5-14.7 0L264 200zM168.8 78.3L160 96l-17.7 8.8c-5.9 2.9-5.9 11.4 0 14.3L160 128l8.8 17.7c2.9 5.9 11.4 5.9 14.3 0L192 128l17.7-8.8c5.9-2.9 5.9-11.4 0-14.3L192 96l-8.8-17.7c-2.9-5.9-11.4-5.9-14.3 0z" />
    </Icon>
);

export default BookSparkles;
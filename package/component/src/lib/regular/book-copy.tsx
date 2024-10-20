
import { Icon } from "../../index";

/**
 * A component that renders the `book-copy` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-copy?s=regular book-copy}
 * @preview ![book-copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-copy.svg)
 */
const BookCopy: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 88c0-48.6 39.4-88 88-88L528 0c26.5 0 48 21.5 48 48l0 112 0 96c0 20.9-13.4 38.7-32 45.3l0 66.7 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0-248 0c-44.2 0-80-35.8-80-80l0-248zM528 48L280 48c-22.1 0-40 17.9-40 40l0 174.7c9.8-4.3 20.6-6.7 32-6.7l248 0 8 0 0-96 0-112zM272 304c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0 0-64-224 0zM160 96l0 48-72 0c-22.1 0-40 17.9-40 40l0 174.7c9.8-4.3 20.6-6.7 32-6.7l81.1 0c2.5 17.7 9.2 34 18.9 48L80 400c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0 0-16 48 0 0 16 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0L80 512c-44.2 0-80-35.8-80-80L0 184c0-48.6 39.4-88 88-88l72 0z" />
    </Icon>
);

export default BookCopy;
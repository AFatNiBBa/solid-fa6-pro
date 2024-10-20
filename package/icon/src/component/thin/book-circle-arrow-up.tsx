
import { Icon } from "../../index";

/**
 * A component that renders the `book-circle-arrow-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-up?s=thin book-circle-arrow-up}
 * @preview ![book-circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-circle-arrow-up.svg)
 */
const BookCircleArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M56 0C25.1 0 0 25.1 0 56L0 456c0 30.9 25.1 56 56 56l338.8 0c-6.9-4.9-13.5-10.2-19.6-16L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l270.6 0c-1.5-5.2-2.7-10.6-3.7-16L56 400c-15.7 0-29.8 6.4-40 16.8L16 56c0-22.1 17.9-40 40-40l352 0c13.3 0 24 10.7 24 24l0 164c5.2-2 10.6-3.8 16-5.4L448 40c0-22.1-17.9-40-40-40L56 0zM368 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-213.7-2.3c3.1 3.1 8.2 3.1 11.3 0L488 315.3 488 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-124.7 50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3z" />
    </Icon>
);

export default BookCircleArrowUp;
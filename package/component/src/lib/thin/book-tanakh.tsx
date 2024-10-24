
import { Icon } from "../../index";

/**
 * A component that renders the `book-tanakh` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-tanakh?s=thin book-tanakh}
 * @preview ![book-tanakh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-tanakh.svg)
 */
const BookTanakh: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M392 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-80.8C13.7 411.5 0 395.4 0 376L0 40C0 17.9 17.9 0 40 0L392 0zM48 416l0 80 344 0c22.1 0 40-17.9 40-40s-17.9-40-40-40L48 416zm344-16c15.7 0 29.8 6.4 40 16.8L432 56c0-22.1-17.9-40-40-40L40 16C26.7 16 16 26.7 16 40l0 336c0 13.3 10.7 24 24 24l352 0zM239.1 136L216 96l-23.1 40 46.2 0zm18.5 0l55.4 0c12.3 0 20 13.3 13.9 24l-27.7 48 27.7 48c6.2 10.7-1.5 24-13.9 24l-55.4 0-27.7 48c-6.2 10.7-21.6 10.7-27.7 0l-27.7-48L119 280c-12.3 0-20-13.3-13.9-24l27.7-48-27.7-48c-6.2-10.7 1.5-24 13.9-24l55.4 0 27.7-48c6.2-10.7 21.6-10.7 27.7 0l27.7 48zm-9.2 16l-64.7 0-32.3 56 32.3 56 64.7 0 32.3-56-32.3-56zm41.6 40L313 152l-46.2 0 23.1 40zm0 32l-23.1 40 46.2 0-23.1-40zm-50.8 56l-46.2 0L216 320l23.1-40zm-73.9-16l-23.1-40L119 264l46.2 0zm-23.1-72l23.1-40L119 152l23.1 40z" />
    </Icon>
);

export default BookTanakh;

import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=solid share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M366.6 39.5c9.1-9.6 24.3-10 33.9-.9L542.2 173.2c19.9 18.9 19.9 50.7 0 69.6L400.5 377.4c-9.6 9.1-24.8 8.7-33.9-.9s-8.7-24.8 .9-33.9L509.2 208 367.5 73.4c-9.6-9.1-10-24.3-.9-33.9zM224 64c0-12.6 7.4-24.1 19-29.2s25-3 34.4 5.4l160 144c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8l-160 144c-9.4 8.5-22.9 10.6-34.4 5.4s-19-16.6-19-29.2l0-64-32 0c-53 0-96 43-96 96c0 30.4 12.8 47.9 22.2 56.7c5.5 5.1 9.8 12 9.8 19.5c0 10.9-8.8 19.7-19.7 19.7c-2.8 0-5.6-.6-8.1-1.9C81.5 467.9 0 417.3 0 304c0-97.2 78.8-176 176-176l48 0 0-64z" />
    </Icon>
);

export default ShareAll;
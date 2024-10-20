
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-xmark?s=thin hexagon-xmark}
 * @preview ![hexagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hexagon-xmark.svg)
 */
const HexagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400.8 450.8s0 0 0 0L497.1 284c2.5-4.3 4.4-8.9 5.6-13.6c2-7.7 2.4-15.7 1.1-23.6c-1.1-6.5-3.3-12.9-6.7-18.8L400.8 61.2c-10-17.3-28.5-28-48.5-28l-192.6 0c-20 0-38.5 10.7-48.5 28L14.9 228c-3.9 6.7-6.3 14.1-7.1 21.6c-1.4 11.8 1 23.9 7.1 34.4l96.3 166.8c10 17.3 28.5 28 48.5 28l192.6 0c20 0 38.5-10.7 48.5-28zM483.2 236c2.7 4.6 4.4 9.7 5 14.8l-2.7 20.4c-.7 1.6-1.5 3.2-2.3 4.8L386.9 442.8c-7.1 12.4-20.3 20-34.6 20l-192.6 0c-14.3 0-27.5-7.6-34.6-20L28.8 276c-3.6-6.2-5.4-13.1-5.4-20c0-3.4 .4-6.8 1.3-10.1c.9-3.4 2.2-6.8 4.1-9.9L125.1 69.2c7.1-12.4 20.4-20 34.6-20l192.6 0c14.3 0 27.5 7.6 34.6 20L483.2 236zM178.3 178.3c-3.1 3.1-3.1 8.2 0 11.3L244.7 256l-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L256 267.3l66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L267.3 256l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L256 244.7l-66.3-66.3c-3.1-3.1-8.2-3.1-11.3 0z" />
    </Icon>
);

export default HexagonXmark;
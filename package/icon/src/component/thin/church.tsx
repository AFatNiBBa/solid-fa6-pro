
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=thin church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 40-48 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l48 0 0 59.6L186.1 203.1c-16.2 10.3-26.1 28.1-26.1 47.3L160 496 56 496c-22.1 0-40-17.9-40-40l0-70.3c0-13.4 6.7-25.9 17.8-33.3l98.6-65.7c3.7-2.5 4.7-7.4 2.2-11.1s-7.4-4.7-11.1-2.2L24.9 339.1C9.4 349.5 0 367 0 385.7L0 456c0 30.9 25.1 56 56 56l120 0c.1 0 .2 0 .3 0l79.7 0 16 0 96 0 16 0 88 0c.1 0 .2 0 .3 0L584 512c30.9 0 56-25.1 56-56l0-70.3c0-18.7-9.4-36.2-24.9-46.6l-98.6-65.7c-3.7-2.5-8.6-1.5-11.1 2.2s-1.5 8.6 2.2 11.1l98.6 65.8c11.1 7.4 17.8 19.9 17.8 33.3l0 70.3c0 22.1-17.9 40-40 40l-104 0 0-245.5c0-19.2-9.8-37.1-26.1-47.3L328 123.6 328 64l48 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0 0-40zM464 496c-.1 0-.2 0-.3 0L384 496l0-112c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 112-80 0 0-245.5c0-13.7 7-26.5 18.6-33.8L320 137.5l125.4 79.2C457 224 464 236.7 464 250.5L464 496zM368 384l0 112-96 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default Church;
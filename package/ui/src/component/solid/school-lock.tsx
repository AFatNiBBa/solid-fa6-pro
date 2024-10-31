
import { Icon } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=solid school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M302.2 5.4c10.7-7.2 24.8-7.2 35.5 0L473.7 96 592 96c26.5 0 48 21.5 48 48l0 128c0-61.9-50.1-112-112-112s-112 50.1-112 112l0 24.6c-19.1 11.1-32 31.7-32 55.4l-63.7 0-.3 0c-35.3 0-64 28.7-64 64l0 96 64 0s0 0 0 0L48 512c-26.5 0-48-21.5-48-48L0 144c0-26.5 21.5-48 48-48l118.3 0L302.2 5.4zM80 208l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 128l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm240-72a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm16-120l0 16 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16zm192 96c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48z" />
    </Icon>
);

export default SchoolLock;
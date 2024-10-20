
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-up-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-lock?s=regular arrow-down-up-lock}
 * @preview ![arrow-down-up-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-up-lock.svg)
 */
const ArrowDownUpLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M145 505l96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55L152 280l264 0 0-8c0-14.1 2.6-27.6 7.4-40L344 232l0-150.1 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L337 7c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-96 96c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55L296 232l-144 0-48 0-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0 0 150.1L49 375c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0zm7-313l0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136 48 0zM296 320l0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136-48 0zm232-80c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default ArrowDownUpLock;
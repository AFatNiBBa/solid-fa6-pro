
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-up-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-lock?s=light arrow-down-up-lock}
 * @preview ![arrow-down-up-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-up-lock.svg)
 */
const ArrowDownUpLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M139.3 507.3l96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L144 457.4 144 272l160 0 32 0 80 0c0-11.1 1.6-21.9 4.6-32L336 240l0-185.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L304 54.6 304 240l-160 0-32 0-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 185.4L43.3 388.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0zM144 200l0-152c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 152 32 0zM336 312l-32 0 0 152c0 8.8 7.2 16 16 16s16-7.2 16-16l0-152zm192-88c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default ArrowDownUpLock;
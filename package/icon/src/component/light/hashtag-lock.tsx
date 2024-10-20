
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=light hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M195.6 32.4c8.6 2 14 10.6 12 19.2L186.3 144l127.2 0 23-99.6c2-8.6 10.6-14 19.2-12s14 10.6 12 19.2L346.3 144l85.7 0c8.8 0 16 7.2 16 16c0 .4 0 .8 0 1.1c-15.1 2.2-29.2 7.3-41.7 14.9l-67.4 0L271.6 467.6c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2L261.7 368l-127.2 0-23 99.6c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2L101.7 368 16 368c-8.8 0-16-7.2-16-16s7.2-16 16-16l93.1 0L146 176l-98 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l105.4 0 23-99.6c2-8.6 10.6-14 19.2-12zM178.9 176L142 336l127.2 0L306 176l-127.2 0zM464 224c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default HashtagLock;
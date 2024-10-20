
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=sharp-light hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 144l13.9 0-3.6 18.1c-12.9 2.5-25.1 7.3-36 13.9l-67.4 0L268.7 480l-32.8 0 25.8-112-127.2 0L108.7 480l-32.8 0 25.8-112L16 368 2.1 368l6.4-32 7.5 0 93.1 0L146 176l-98 0-7.5 0 6.4-32 1.1 0 105.4 0L179.3 32l32.8 0L186.3 144l127.2 0L339.3 32l32.8 0L346.3 144l85.7 0zM178.9 176L142 336l127.2 0L306 176l-127.2 0zM464 224c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 32 0 128 0 32-32 0-160 0-32 0 0-32 0-128 0-32 32 0 0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default HashtagLock;
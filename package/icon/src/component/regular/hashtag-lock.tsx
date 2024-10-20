
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=regular hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M188.7 32.5c13 2.6 21.4 15.2 18.8 28.2L192.5 136l111 0 16.9-84.7c2.6-13 15.2-21.4 28.2-18.8s21.4 15.2 18.8 28.2L352.5 136l71.5 0c13.3 0 24 10.7 24 24c0 .4 0 .8 0 1.1c-19.9 2.9-38.2 11-53.3 22.9l-51.8 0L287.5 460.7c-2.6 13-15.2 21.4-28.2 18.8s-21.4-15.2-18.8-28.2L255.5 376l-111 0-16.9 84.7c-2.6 13-15.2 21.4-28.2 18.8s-21.4-15.2-18.8-28.2L95.5 376 24 376c-13.3 0-24-10.7-24-24s10.7-24 24-24l81.1 0 28.8-144L56 184c-13.3 0-24-10.7-24-24s10.7-24 24-24l87.5 0 16.9-84.7c2.6-13 15.2-21.4 28.2-18.8zM182.9 184L154.1 328l111 0 28.8-144-111 0zM464 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48z" />
    </Icon>
);

export default HashtagLock;
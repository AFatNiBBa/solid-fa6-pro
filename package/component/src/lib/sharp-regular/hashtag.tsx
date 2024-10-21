
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=sharp-regular hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M447.5 136L424 136l-71.5 0L373.3 32l-49 0L303.5 136l-111 0L213.3 32l-49 0L143.5 136 56 136l-7.5 0-9.6 48L56 184l77.9 0L105.1 328 24 328l-13.9 0L.5 376 24 376l71.5 0L74.7 480l49 0 20.8-104 111 0L234.7 480l49 0 20.8-104 87.5 0 7.5 0 9.6-48L392 328l-77.9 0 28.8-144 81.1 0 13.9 0 9.6-48zM182.9 184l111 0L265.1 328l-111 0 28.8-144z" />
    </Icon>
);

export default Hashtag;
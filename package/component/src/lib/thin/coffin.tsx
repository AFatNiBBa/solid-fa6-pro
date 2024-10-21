
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=thin coffin}
 * @preview ![coffin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/coffin.svg)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M114.5 21.5c3-3.5 7.4-5.5 12-5.5l131 0c4.6 0 9 2 12 5.5l91 104c4.8 5.5 7.5 12.7 7.5 20c0 2.9-.4 5.7-1.2 8.4L271.3 484.4c-2 6.8-8.2 11.6-15.4 11.6l-127.9 0c-7.1 0-13.4-4.7-15.4-11.6L17.2 153.9c-.8-2.7-1.2-5.6-1.2-8.4c0-7.4 2.7-14.5 7.5-20l91-104zm-12-10.5l-91 104C4.1 123.3 0 134.2 0 145.4c0 4.4 .6 8.7 1.8 12.9L97.3 488.9c4 13.7 16.5 23.1 30.7 23.1l127.9 0c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6c1.2-4.2 1.8-8.5 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0l-131 0c-9.2 0-18 4-24.1 10.9z" />
    </Icon>
);

export default Coffin;

import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=light coffin}
 * @preview ![coffin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/coffin.svg)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M126.5 32l131 0 91 104c2.3 2.6 3.6 6 3.6 9.5c0 1.4-.2 2.7-.6 4L255.9 480l-127.9 0L32.6 149.4c-.4-1.3-.6-2.6-.6-4c0-3.5 1.3-6.9 3.6-9.5l91-104zM102.4 10.9l-91 104C4.1 123.3 0 134.2 0 145.4c0 4.4 .6 8.7 1.8 12.9L97.3 488.9c4 13.7 16.5 23.1 30.7 23.1l127.9 0c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6c1.2-4.2 1.8-8.5 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0l-131 0c-9.2 0-18 4-24.1 10.9z" />
    </Icon>
);

export default Coffin;
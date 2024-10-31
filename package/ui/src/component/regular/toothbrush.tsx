
import { Icon } from "../../index";

/**
 * A component that renders the `toothbrush` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toothbrush?s=regular toothbrush}
 * @preview ![toothbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toothbrush.svg)
 */
const Toothbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 176c-8.8 0-16-7.2-16-16s7.2-16 16-16l224 0c29.4 0 55.1-11.9 71-36.1c4.3-6.5 7.4-13.2 9.7-19.9c6.4 2.7 12 6 16.6 9.7c9.5 7.7 14.6 17 14.6 30.3c0 26.5-21.5 48-48 48L64 176zM0 160c0 35.3 28.7 64 64 64l288 0c53 0 96-43 96-96c0-58.5-51.6-89.9-104-95.2c-8.8-.9-15.8 6.4-16.4 15.2c-1.5 25.3-8.4 48-39.6 48L64 96C28.7 96 0 124.7 0 160zM80 280c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 80 0 80 0 80 0 80 0 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-152 0 0-152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152-32 0 0-152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152-32 0 0-152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152-32 0 0-152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152-32 0 0-152z" />
    </Icon>
);

export default Toothbrush;
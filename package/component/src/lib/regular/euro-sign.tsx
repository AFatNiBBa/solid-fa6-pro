
import { Icon } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=regular euro-sign}
 * @preview ![euro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/euro-sign.svg)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48.6 240c-.4 5.3-.6 10.6-.6 16s.2 10.7 .6 16L24 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l33.3 0C84.8 412.5 170.5 480 272 480l24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0c-74.6 0-138.4-46.4-164-112l156 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96.7 272c-.5-5.3-.7-10.6-.7-16s.2-10.7 .7-16L264 240c13.3 0 24-10.7 24-24s-10.7-24-24-24l-156 0c25.6-65.6 89.4-112 164-112l24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0C170.5 32 84.8 99.5 57.3 192L24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24l24.6 0z" />
    </Icon>
);

export default EuroSign;
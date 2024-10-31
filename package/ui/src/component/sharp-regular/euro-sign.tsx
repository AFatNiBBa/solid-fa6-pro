
import { Icon } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=sharp-regular euro-sign}
 * @preview ![euro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/euro-sign.svg)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48.6 240c-.4 5.3-.6 10.6-.6 16s.2 10.7 .6 16L0 272l0 48 57.3 0C84.8 412.5 170.5 480 272 480l24 0 24 0 0-48-24 0-24 0c-74.6 0-138.4-46.4-164-112l180 0 0-48L96.7 272c-.5-5.3-.7-10.6-.7-16s.2-10.7 .7-16L288 240l0-48-180 0c25.6-65.6 89.4-112 164-112l24 0 24 0 0-48-24 0-24 0C170.5 32 84.8 99.5 57.3 192L0 192l0 48 48.6 0z" />
    </Icon>
);

export default EuroSign;

import { Icon } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=sharp-thin phone-flip}
 * @preview ![phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-flip.svg)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 64c0 247.4-200.6 448-448 448l-32 0L0 368l144-80 67 83.8c68.4-36.1 124.6-92.3 160.8-160.8L288 144 368 0 512 32l0 32zM496 44.8L376.2 18.2 308.6 140l73.2 58.6 10.3 8.3L386 218.5c-37.6 71.3-96.2 129.8-167.4 167.4l-11.7 6.2-8.3-10.3L140 308.6 18.2 376.2 44.9 496 64 496c238.6 0 432-193.4 432-432c0 0 0 0 0 0l0-19.2z" />
    </Icon>
);

export default PhoneFlip;
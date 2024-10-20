
import { Icon } from "../../index";

/**
 * A component that renders the `mercury` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=sharp-light mercury}
 * @preview ![mercury](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mercury.svg)
 */
const Mercury: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M118.6 64C88.2 50.1 62.5 27.7 44.5 0L84.7 0C111 29.5 149.4 48 192 48s81-18.5 107.3-48l40.2 0c-18.1 27.7-43.8 50.1-74.1 64C326 91.8 368 153 368 224c0 91.8-70.3 167.2-160 175.3l0 32.7 48 0 16 0 0 32-16 0-48 0 0 32 0 16-32 0 0-16 0-32-48 0-16 0 0-32 16 0 48 0 0-32.7C86.3 391.2 16 315.8 16 224C16 153 58 91.8 118.6 64zM192 368a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default Mercury;
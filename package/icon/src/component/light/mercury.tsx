
import { Icon } from "../../index";

/**
 * A component that renders the `mercury` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=light mercury}
 * @preview ![mercury](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mercury.svg)
 */
const Mercury: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M89.2 4.8C83-1.5 72.8-1.6 66.5 4.6s-6.4 16.3-.2 22.6C81.2 42.4 98.9 55 118.6 64C58 91.8 16 153 16 224c0 91.8 70.3 167.2 160 175.3l0 32.7-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-32.7c89.7-8.1 160-83.5 160-175.3c0-71-42-132.2-102.6-160c19.6-9 37.3-21.6 52.3-36.8c6.2-6.3 6.1-16.4-.2-22.6s-16.4-6.1-22.6 .2C268.7 31.5 232.3 48 192 48S115.3 31.5 89.2 4.8zM192 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288z" />
    </Icon>
);

export default Mercury;
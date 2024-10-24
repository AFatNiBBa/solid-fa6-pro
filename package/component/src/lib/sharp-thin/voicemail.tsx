
import { Icon } from "../../index";

/**
 * A component that renders the `voicemail` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/voicemail?s=sharp-thin voicemail}
 * @preview ![voicemail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/voicemail.svg)
 */
const Voicemail: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 368a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM288 240c0 55.7-31.7 104.1-78 128L430 368c-46.3-23.9-78-72.3-78-128c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144l-352 0C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144zM496 368a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM144 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm416 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-144 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default Voicemail;
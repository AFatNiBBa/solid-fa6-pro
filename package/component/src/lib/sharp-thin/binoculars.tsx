
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-thin binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48l0 48 80 0 0-48-80 0zM96 96l0-48 0-16 16 0 80 0 16 0 0 16 0 48 16 0 0 16 0 16 64 0 0-16 0-16 16 0 0-48 0-16 16 0 80 0 16 0 0 16 0 48 32 0 16 128 48 80 0 160 0 16-16 0-192 0-16 0 0-16 0-176-64 0 0 176 0 16-16 0L16 480 0 480l0-16L0 304l48-80L64 96l32 0zm0 16l-17.9 0L63.9 226l-.4 3.4-1.7 2.9L16 308.4 16 464l192 0 0-184 0-144 0-24-16 0-80 0-16 0zM400 96l0-48-80 0 0 48 80 0zm-80 16l-16 0 0 24 0 144 0 184 192 0 0-155.6-45.7-76.2-1.7-2.9-.4-3.4L433.9 112 416 112l-16 0-80 0zM224 272l64 0 0-128-64 0 0 128z" />
    </Icon>
);

export default Binoculars;
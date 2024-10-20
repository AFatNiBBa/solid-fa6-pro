
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=regular music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 31c0-17.1-13.9-31-31-31c-3.1 0-6.2 .5-9.1 1.4l-311 95.7C150.9 100.2 144 109.5 144 120l0 120 0 122.7c-14.1-6.8-30.5-10.7-48-10.7c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80l0-171.8 272-83.7 0 122.2c-14.1-6.8-30.5-10.7-48-10.7c-53 0-96 35.8-96 80s43 80 96 80s96-35.8 96-80l0-223.4c0-.4 0-.7 0-1.1L512 31zM464 368c0 9.8-12.9 32-48 32s-48-22.2-48-32s12.9-32 48-32s48 22.2 48 32zM144 432c0 9.8-12.9 32-48 32s-48-22.2-48-32s12.9-32 48-32s48 22.2 48 32zM464 126.3L192 210l0-72.2L464 54l0 72.2z" />
    </Icon>
);

export default Music;
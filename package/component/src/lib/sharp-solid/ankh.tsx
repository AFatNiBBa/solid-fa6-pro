
import { Icon } from "../../index";

/**
 * A component that renders the `ankh` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=sharp-solid ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 41.6-20.7 76.6-46.6 104.1c-5.9 6.2-11.8 11.8-17.4 16.7c-5.6-4.9-11.5-10.5-17.4-16.7C116.7 204.6 96 169.6 96 128zM160 0C89.3 0 32 57.3 32 128c0 52.4 21.5 95.5 46.8 128L32 256 0 256l0 64 32 0 96 0 0 160 0 32 64 0 0-32 0-160 96 0 32 0 0-64-32 0-46.8 0c25.4-32.5 46.8-75.6 46.8-128C288 57.3 230.7 0 160 0z" />
    </Icon>
);

export default Ankh;
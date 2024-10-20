
import { Icon } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=sharp-light person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M320 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 224 64zm-66.8 80l10.8 0 64 0 10.2 0 4.3 9.2 46.7 100.1 95.9-89.1 21.8 23.4-112 104-16.1 14.9-9.3-19.9-21.7-46.4L185.6 399.3l126.5 75 7.8 4.6 0 9.1 0 8 0 16-16 0L48 512l-16 0 0-32 16 0 211.1 0L115.2 394.7c-27.1-16.1-38.5-49.5-26.8-78.8l64.7-161.8 4-10.1zm64.6 32l-43 0L118.1 327.8c-5.9 14.6-.2 31.4 13.4 39.4l26.3 15.6 75.4-180.9c.1-.2 .2-.5 .3-.7L221.8 176z" />
    </Icon>
);

export default PersonPraying;
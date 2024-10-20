
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=sharp-thin droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M443.6 445.3C411.8 476.7 368.2 496 320 496c-97.2 0-176-78.8-176-176c0-22.5 10.5-52.9 28.2-87.4l.6-1.1L160 221.4c-19.1 36.4-32 71.1-32 98.6c0 106 86 192 192 192c53.3 0 101.5-21.7 136.2-56.7l-12.6-10zM309.4 12.1c-14.4 16.7-41.6 49.1-70.6 88l12.6 9.9c18.8-25.1 36.8-47.6 51-64.7c6.9-8.3 12.9-15.4 17.7-21c4.8 5.6 10.8 12.6 17.7 21c17.8 21.5 41.6 51.3 65.3 84.3c23.8 33 47.3 69 64.8 103c13.3 25.9 22.5 49.5 26.3 69.1l17.8 14.1C507.7 223.9 370.3 58.2 330.6 12.1C323.9 4.4 320 0 320 0s-3.9 4.4-10.6 12.1zM320 408c-48.6 0-88-39.4-88-88l-16 0c0 57.4 46.6 104 104 104l0-16zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default DropletSlash;
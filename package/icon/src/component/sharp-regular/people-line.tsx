
import { Icon } from "../../index";

/**
 * A component that renders the `people-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-line?s=sharp-regular people-line}
 * @preview ![people-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/people-line.svg)
 */
const PeopleLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M280 72a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm-22.3 56l14.3 0 96 0 14.3 0 6.8 12.6L434 224l14 0 96 0 14.1 0 6.9 12.3 56 100.8 11.7 21-42 23.3-11.7-21-19-34.2 0 33.8 0 24-24 0-80 0-24 0 0-24 0-33.8-19 34.2-11.7 21-42-23.3 11.7-21 35.2-63.5-3.4-6.3-18.9-35 0 47.7 0 24-24 0-80 0-24 0 0-24 0-47.7-18.9 35-3.4 6.3L269 337.1l11.7 21-42 23.3-11.7-21-19-34.2 0 33.8 0 24-24 0-80 0-24 0 0-24 0-33.8L61 360.5l-11.7 21-42-23.3 11.7-21L75 236.3 81.9 224 96 224l96 0 14 0 44.9-83.4 6.8-12.6zM304 176l0 80 32 0 0-80-32 0zm192-48a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM24 432l592 0 24 0 0 48-24 0L24 480 0 480l0-48 24 0zM144 128a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM128 336l32 0 0-64-32 0 0 64zm352 0l32 0 0-64-32 0 0 64z" />
    </Icon>
);

export default PeopleLine;
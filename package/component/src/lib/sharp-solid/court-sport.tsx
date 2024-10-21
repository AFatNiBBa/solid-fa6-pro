
import { Icon } from "../../index";

/**
 * A component that renders the `court-sport` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/court-sport?s=sharp-solid court-sport}
 * @preview ![court-sport](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/court-sport.svg)
 */
const CourtSport: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 480l-304 0 0-113.1c54.3-7.8 96-54.4 96-110.9s-41.7-103.1-96-110.9L336 32l304 0 0 96-96 0-32 0 0 32 0 192 0 32 32 0 96 0 0 96zM304 145.1c-54.3 7.8-96 54.4-96 110.9s41.7 103.1 96 110.9L304 480 0 480l0-96 96 0 32 0 0-32 0-192 0-32-32 0L0 128 0 32l304 0 0 113.1zm0 189.3c-36.5-7.4-64-39.7-64-78.4s27.5-71 64-78.4l0 156.8zm32 0l0-156.8c36.5 7.4 64 39.7 64 78.4s-27.5 71-64 78.4zM544 160l96 0 0 192-96 0 0-192zM96 352L0 352 0 160l96 0 0 192z" />
    </Icon>
);

export default CourtSport;
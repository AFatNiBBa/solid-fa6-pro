
import { Icon } from "../../index";

/**
 * A component that renders the `golf-club` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-club?s=thin golf-club}
 * @preview ![golf-club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/golf-club.svg)
 */
const GolfClub: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.2 11.6c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L309.6 378.8 50.4 308.8C25 301.9 0 321.1 0 347.4L0 384l0 64 0 24c0 22.1 17.9 40 40 40l186.3 0c21.2 0 40.6-12 50.1-31L321 391.8 511.2 11.6zM16 456l64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0 0-48 64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0 0-28.6c0-15.8 15-27.3 30.3-23.2l256.1 69.2-40.2 80.5c-6.8 13.6-20.6 22.1-35.8 22.1L40 496c-13.3 0-24-10.7-24-24l0-16z" />
    </Icon>
);

export default GolfClub;
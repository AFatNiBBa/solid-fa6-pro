
import { Icon } from "../../index";

/**
 * A component that renders the `star-and-crescent` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-and-crescent?s=sharp-thin star-and-crescent}
 * @preview ![star-and-crescent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star-and-crescent.svg)
 */
const StarAndCrescent: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 48c22.1 0 43.5 3.5 63.5 9.9c19.8 6.4 38.4 15.6 55.1 27.3c-14.2-15.8-30.3-29.9-48-41.8C357.8 16 308.8 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c52.8 0 101.8-16 142.6-43.4c17.7-11.9 33.8-25.9 48-41.8c-16.8 11.7-35.3 20.9-55.1 27.3c-20 6.4-41.3 9.9-63.5 9.9c-114.9 0-208-93.1-208-208s93.1-208 208-208zm0-16C204.3 32 104 132.3 104 256s100.3 224 224 224c5.3 0 10.6-.2 15.8-.5C316.6 490.1 287 496 256 496C123.5 496 16 388.5 16 256S123.5 16 256 16c31 0 60.6 5.9 87.8 16.5c-5.2-.4-10.5-.5-15.8-.5zm64.9 106.1L384 120l-8.9 18.1-33.4 67.7L267 216.6 247 219.5l14.4 14.1 54 52.7-12.8 74.4-3.4 19.9 17.8-9.4L384 336l66.8 35.1 17.8 9.4-3.4-19.9-12.8-74.4 54-52.7L521 219.5 501 216.6l-74.7-10.9-33.4-67.7zM424 221.6l62.6 9.1-45.3 44.1-6 5.9 1.4 8.3 10.7 62.3-55.9-29.4-7.4-3.9-7.4 3.9-55.9 29.4L331.3 289l1.4-8.3-6-5.9-45.3-44.1 62.5-9.1 8.3-1.2 3.7-7.5 28-56.7 28 56.7 3.7 7.5 8.3 1.2z" />
    </Icon>
);

export default StarAndCrescent;
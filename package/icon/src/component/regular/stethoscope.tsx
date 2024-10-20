
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=regular stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M142.5 15.6c4.7 12.4-1.6 26.2-14 30.9L85.2 62.7c-3.1 1.2-5.2 4.2-5.2 7.5L80 200c0 57.4 46.6 104 104 104l8 0 8 0c57.4 0 104-46.6 104-104l0-129.8c0-3.3-2.1-6.3-5.2-7.5L255.6 46.5c-12.4-4.7-18.7-18.5-14-30.9s18.5-18.7 30.9-14l43.2 16.2C337.5 25.9 352 46.8 352 70.2L352 200c0 78.5-59.5 143.1-135.8 151.1C219.9 414.1 272.1 464 336 464c66.3 0 120-53.7 120-120l0-75.7c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3l0 75.7c0 92.8-75.2 168-168 168c-90.4 0-164.1-71.4-167.8-160.8C91.7 343.3 32 278.6 32 200L32 70.2c0-23.3 14.5-44.2 36.3-52.4L111.6 1.5c12.4-4.7 26.2 1.6 30.9 14zM480 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Stethoscope;
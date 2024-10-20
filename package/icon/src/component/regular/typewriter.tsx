
import { Icon } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=regular typewriter}
 * @preview ![typewriter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/typewriter.svg)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 64c0-8.8 7.2-16 16-16l191.4 0c4.2 0 8.3 1.7 11.3 4.7l32.6 32.6c3 3 4.7 7.1 4.7 11.3l0 63.4 48 0 0-63.4c0-17-6.7-33.3-18.7-45.3L380.7 18.7C368.7 6.7 352.4 0 335.4 0L144 0C108.7 0 80 28.7 80 64l0 96 48 0 0-96zM0 224l0 32c0 17.7 14.3 32 32 32l0 160c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-160c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-114.7 0c-8.5 0-16.6 3.4-22.6 9.4l-13.3 13.3c-6 6-14.1 9.4-22.6 9.4l-101.5 0c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4L32 192c-17.7 0-32 14.3-32 32zm80 64l352 0 0 160c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-160zm48 112l0 16c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-224 0c-8.8 0-16 7.2-16 16zm40-60a20 20 0 1 0 -40 0 20 20 0 1 0 40 0zm52 20a20 20 0 1 0 0-40 20 20 0 1 0 0 40zm92-20a20 20 0 1 0 -40 0 20 20 0 1 0 40 0zm52 20a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default Typewriter;
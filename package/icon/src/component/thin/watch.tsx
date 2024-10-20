
import { Icon } from "../../index";

/**
 * A component that renders the `watch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=thin watch}
 * @preview ![watch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/watch.svg)
 */
const Watch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120 16l144 0c22.1 0 40 17.9 40 40l0 44c-31.5-22.7-70.2-36-112-36s-80.5 13.4-112 36l0-44c0-22.1 17.9-40 40-40zM64 112l1 0C25.1 147.2 0 198.7 0 256c0 56.9 24.7 108 64 143.1L64 456c0 30.9 25.1 56 56 56l144 0c30.9 0 56-25.1 56-56l0-56.9c39.3-35.2 64-86.2 64-143.1c0-57.3-25.1-108.8-65-144l1 0 0-56c0-30.9-25.1-56-56-56L120 0C89.1 0 64 25.1 64 56l0 56zM304 412l0 44c0 22.1-17.9 40-40 40l-144 0c-22.1 0-40-17.9-40-40l0-44c31.5 22.7 70.2 36 112 36s80.5-13.4 112-36zM16 256a176 176 0 1 1 352 0A176 176 0 1 1 16 256zm184-96c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 96c0 2.5 1.2 4.9 3.2 6.4l64 48c3.5 2.7 8.5 1.9 11.2-1.6s1.9-8.5-1.6-11.2L200 252l0-92z" />
    </Icon>
);

export default Watch;
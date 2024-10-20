
import { Icon } from "../../index";

/**
 * A component that renders the `bug` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug?s=regular bug}
 * @preview ![bug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bug.svg)
 */
const Bug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM39 103c9.4-9.4 24.6-9.4 33.9 0l72.4 72.4C161.3 165.7 180 160 200 160l112 0c20 0 38.7 5.7 54.6 15.5L439 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72.4 72.4C410.3 225.3 416 244 416 264l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0 0 8c0 27.2-6.8 52.8-18.8 75.3L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-70.9-70.9C339.3 462.5 299.7 480 256 480s-83.3-17.5-112.2-45.9L73 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l75.8-75.8C102.8 372.8 96 347.2 96 320l0-8-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c0-20 5.7-38.7 15.5-54.6L39 137c-9.4-9.4-9.4-24.6 0-33.9zM144 264l0 56c0 53.6 37.7 98.4 88 109.4L232 280c0-13.3 10.7-24 24-24s24 10.7 24 24l0 149.4c50.3-11 88-55.8 88-109.4l0-56c0-30.9-25.1-56-56-56l-112 0c-30.9 0-56 25.1-56 56z" />
    </Icon>
);

export default Bug;
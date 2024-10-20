
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=thin bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 80c13.3 0 24 10.7 24 24l0 17.4 0 16.1 0 14.5c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-14.5 0-16.1 0-17.4c0-13.3 10.7-24 24-24l48 0zm80.1 56L528 136c.2 0 .4 0 .6 0c3.9 27.1 27.2 48 55.4 48c30.9 0 56-25.1 56-56s-25.1-56-56-56c-28.2 0-51.6 20.9-55.4 48c-.2 0-.4 0-.6 0l-144 0 0-16c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 16-144 0c-.2 0-.4 0-.6 0C107.6 92.9 84.2 72 56 72C25.1 72 0 97.1 0 128s25.1 56 56 56c28.2 0 51.6-20.9 55.4-48c.2 0 .4 0 .6 0l103.9 0C143.1 166.4 91.3 237 88.2 320L72 320c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-15.8 0c3.6-88.7 67.5-162 151.8-179.8l0 11.8c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-11.8C468.3 158 532.2 231.3 535.8 320L520 320c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-16.2 0c-3.1-83-54.9-153.6-127.7-184zM16 128a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm528 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM72 336l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zm424 24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48z" />
    </Icon>
);

export default BezierCurve;
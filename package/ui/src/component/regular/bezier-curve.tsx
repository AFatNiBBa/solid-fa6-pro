
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=regular bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 80l0 64-64 0 0-64 64 0zM288 32c-26.5 0-48 21.5-48 48l0 8L123.3 88C113.9 64.5 90.9 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l79 0C138.2 173.8 93.9 241.5 88.5 320L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-7.3 0c5.9-68.4 49.2-126.1 109.4-152.6C254.3 182.1 270 192 288 192l64 0c18 0 33.7-9.9 41.9-24.6c60.2 26.4 103.5 84.1 109.4 152.6l-7.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-8.5 0c-5.3-78.5-49.7-146.2-113.8-184l79 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64s-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L400 88l0-8c0-26.5-21.5-48-48-48l-64 0zM48 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm512 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 368l0 64-64 0 0-64 64 0zm352 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default BezierCurve;
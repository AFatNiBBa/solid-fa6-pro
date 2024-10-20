
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=sharp-regular bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 80l0 64-64 0 0-64 64 0zM288 32l-48 0 0 48 0 8L123.3 88C113.9 64.5 90.9 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l79 0C138.2 173.8 93.9 241.5 88.5 320L80 320l-48 0 0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-7.3 0C142.4 253.9 183 197.8 240 170.3l0 21.7 48 0 64 0 48 0 0-21.7c57 27.6 97.6 83.7 103.3 149.7l-7.3 0-48 0 0 48 0 64 0 48 48 0 64 0 48 0 0-48 0-64 0-48-48 0-8.5 0c-5.3-78.5-49.7-146.2-113.8-184l79 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64s-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L400 88l0-8 0-48-48 0-64 0zM48 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm512 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 368l0 64-64 0 0-64 64 0zm352 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default BezierCurve;
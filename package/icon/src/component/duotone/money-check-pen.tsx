
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-check-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-pen?s=duotone money-check-pen}
 * @preview ![money-check-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/money-check-pen.svg)
 */
const MoneyCheckPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64.6c-15.2 2-29.8 8.8-41.4 20.5L353.3 394.3c-8.2 8.2-14 18.5-16.8 29.7l-6 23.9L64 448c-35.3 0-64-28.7-64-64L0 128zm96 80c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-320 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0c-8.8 0-16 7.2-16 16z" />
        <path d="M557.2 235.7l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-52 52L375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71z" />
    </Icon>
);

export default MoneyCheckPen;
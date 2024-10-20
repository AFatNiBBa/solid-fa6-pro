
import { Icon } from "../../index";

/**
 * A component that renders the `chart-kanban` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-kanban?s=sharp-light chart-kanban}
 * @preview ![chart-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-kanban.svg)
 */
const ChartKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 448l0-384 64 0 0 384-64 0zm-32 32l32 0 64 0 32 0 0-32 0-384 0-32-32 0-64 0-32 0 0 32 0 384 0 32zM96 384l-64 0L32 64l64 0 0 320zM32 416l64 0 32 0 0-32 0-320 0-32L96 32 32 32 0 32 0 64 0 384l0 32 32 0zM256 256l-64 0 0-192 64 0 0 192zm-64 32l64 0 32 0 0-32 0-192 0-32-32 0-64 0-32 0 0 32 0 192 0 32 32 0z" />
    </Icon>
);

export default ChartKanban;
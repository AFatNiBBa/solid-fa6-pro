
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-sankey` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-sankey?s=duotone diagram-sankey}
 * @preview ![diagram-sankey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU5MiAzMjBIMjc3TDMxNSAzODRINTc2QzU5NCAzODQgNjA4IDM5OCA2MDggNDE2VjQ0OEM2MDggNDY2IDU5NCA0ODAgNTc2IDQ4MEgyOTdDMjc1IDQ4MCAyNTQgNDY4IDI0MiA0NDlMMTY1IDMyMEgzMkMxNCAzMjAgMCAzMDYgMCAyODhWMjg4QzAgMjcwIDE0IDI1NiAzMiAyNTZINTkyQzYwMSAyNTYgNjA4IDI2MyA2MDggMjcyVjMwNEM2MDggMzEzIDYwMSAzMjAgNTkyIDMyMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA4IDY0VjEyOEM2MDggMTQ2IDU5NCAxNjAgNTc2IDE2MEg0MDRMMzQ3IDI1NkgzMkMxNCAyNTYgMCAyNzAgMCAyODhWMjI0QzAgMjA2IDE0IDE5MiAzMiAxOTJIMjM2TDMxMyA2M0MzMjUgNDQgMzQ2IDMyIDM2OCAzMkg1NzZDNTk0IDMyIDYwOCA0NiA2MDggNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiagramSankey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M592 320H277L315 384H576C594 384 608 398 608 416V448C608 466 594 480 576 480H297C275 480 254 468 242 449L165 320H32C14 320 0 306 0 288V288C0 270 14 256 32 256H592C601 256 608 263 608 272V304C608 313 601 320 592 320Z" />
            <path d="M608 64V128C608 146 594 160 576 160H404L347 256H32C14 256 0 270 0 288V224C0 206 14 192 32 192H236L313 63C325 44 346 32 368 32H576C594 32 608 46 608 64Z" />
        </Icon>
    </>
}
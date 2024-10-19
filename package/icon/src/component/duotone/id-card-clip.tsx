
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `id-card-clip` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=duotone id-card-clip}
 * @preview ![id-card-clip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyOCA2NEgzNTJWMTI4SDM2OEMzNzcuNiAxMjggMzg0IDEzNC4zOTggMzg0IDE0NFMzNzcuNiAxNjAgMzY4IDE2MEgyMDhDMTk4LjQgMTYwIDE5MiAxNTMuNjAyIDE5MiAxNDRTMTk4LjQgMTI4IDIwOCAxMjhIMjI0VjY0SDQ4QzIyLjQgNjQgMCA4Ni4zOTggMCAxMTJWNDY0QzAgNDg5LjYwMiAyMi40IDUxMiA0OCA1MTJINTI4QzU1My42IDUxMiA1NzYgNDg5LjYwMiA1NzYgNDY0VjExMkM1NzYgODYuMzk4IDU1My42IDY0IDUyOCA2NFpNMjg4IDIyNEMzMjMuMzQ2IDIyNCAzNTIgMjUyLjY1NiAzNTIgMjg4UzMyMy4zNDYgMzUyIDI4OCAzNTJTMjI0IDMyMy4zNDQgMjI0IDI4OFMyNTIuNjU0IDIyNCAyODggMjI0Wk0zODQgNDQ4SDE5MkMxODMuMTY0IDQ0OCAxNzYgNDQwLjgzNiAxNzYgNDMyQzE3NiA0MDUuNDkyIDE5Ny40OSAzODQgMjI0IDM4NEgzNTJDMzc4LjUxIDM4NCA0MDAgNDA1LjQ5MiA0MDAgNDMyQzQwMCA0NDAuODM2IDM5Mi44MzYgNDQ4IDM4NCA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM1MiAzMkMzNTIgMTIuNzk3IDMzOS4xOTkgMCAzMjAgMEgyNTZDMjM2LjgwMSAwIDIyNCAxMi43OTcgMjI0IDMyVjEyOEgzNTJWMzJaTTI4OCAzNTJDMzIzLjM0NiAzNTIgMzUyIDMyMy4zNDQgMzUyIDI4OFMzMjMuMzQ2IDIyNCAyODggMjI0UzIyNCAyNTIuNjU2IDIyNCAyODhTMjUyLjY1NCAzNTIgMjg4IDM1MlpNMzUyIDM4NEgyMjRDMTk3LjQ5IDM4NCAxNzYgNDA1LjQ5MiAxNzYgNDMyQzE3NiA0NDAuODM2IDE4My4xNjQgNDQ4IDE5MiA0NDhIMzg0QzM5Mi44MzYgNDQ4IDQwMCA0NDAuODM2IDQwMCA0MzJDNDAwIDQwNS40OTIgMzc4LjUxIDM4NCAzNTIgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function IdCardClip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M528 64H352V128H368C377.6 128 384 134.398 384 144S377.6 160 368 160H208C198.4 160 192 153.602 192 144S198.4 128 208 128H224V64H48C22.4 64 0 86.398 0 112V464C0 489.602 22.4 512 48 512H528C553.6 512 576 489.602 576 464V112C576 86.398 553.6 64 528 64ZM288 224C323.346 224 352 252.656 352 288S323.346 352 288 352S224 323.344 224 288S252.654 224 288 224ZM384 448H192C183.164 448 176 440.836 176 432C176 405.492 197.49 384 224 384H352C378.51 384 400 405.492 400 432C400 440.836 392.836 448 384 448Z" />
            <path d="M352 32C352 12.797 339.199 0 320 0H256C236.801 0 224 12.797 224 32V128H352V32ZM288 352C323.346 352 352 323.344 352 288S323.346 224 288 224S224 252.656 224 288S252.654 352 288 352ZM352 384H224C197.49 384 176 405.492 176 432C176 440.836 183.164 448 192 448H384C392.836 448 400 440.836 400 432C400 405.492 378.51 384 352 384Z" />
        </Icon>
    </>
}
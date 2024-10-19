
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `blender` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=duotone blender}
 * @preview ![blender](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMzNiA2NEg0OTQuNUw1MTIgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFYyMDhDMCAyMzQuNTEgMjEuNDkgMjU2IDQ4IDI1NkgxNTEuMjVMMTYwIDM1Mkg0MTZMNDMzLjUgMjg4SDMzNkMzMjcuMTk5IDI4OCAzMjAgMjgwLjgwMSAzMjAgMjcyUzMyNy4xOTkgMjU2IDMzNiAyNTZINDQyLjEyNUw0NTkuNjI1IDE5MkgzMzZDMzI3LjE5OSAxOTIgMzIwIDE4NC44MDEgMzIwIDE3NlMzMjcuMTk5IDE2MCAzMzYgMTYwSDQ2OC4zNzVMNDg1Ljg3NSA5NkgzMzZDMzI3LjE5OSA5NiAzMjAgODguODAxIDMyMCA4MFMzMjcuMTk5IDY0IDMzNiA2NFpNNjQgMTkyVjY0SDEzMy44NzVMMTQ1LjUgMTkySDY0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMzYgMjg4SDQzMy40NTVMNDQyLjE4MiAyNTZIMzM2QzMyNy4xNjQgMjU2IDMyMCAyNjMuMTYyIDMyMCAyNzJDMzIwIDI4MC44MzYgMzI3LjE2NCAyODggMzM2IDI4OFpNMzM2IDE5Mkg0NTkuNjM3TDQ2OC4zNjMgMTYwSDMzNkMzMjcuMTY0IDE2MCAzMjAgMTY3LjE2MiAzMjAgMTc2QzMyMCAxODQuODM2IDMyNy4xNjQgMTkyIDMzNiAxOTJaTTMzNiA2NEMzMjcuMTY0IDY0IDMyMCA3MS4xNjIgMzIwIDgwQzMyMCA4OC44MzYgMzI3LjE2NCA5NiAzMzYgOTZINDg1LjgxOEw0OTQuNTQ1IDY0SDMzNlpNNDE2IDM4NEgxNjBDMTI0LjYyNSAzODQgOTYgNDEyLjYyNSA5NiA0NDhWNDgwQzk2IDQ5Ny42MjUgMTEwLjM3NSA1MTIgMTI4IDUxMkg0NDhDNDY1LjYyNSA1MTIgNDgwIDQ5Ny42MjUgNDgwIDQ4MFY0NDhDNDgwIDQxMi42MjUgNDUxLjM3NSAzODQgNDE2IDM4NFpNMjg4IDQ4MEMyNzAuMzc1IDQ4MCAyNTYgNDY1LjYyNSAyNTYgNDQ4UzI3MC4zNzUgNDE2IDI4OCA0MTZTMzIwIDQzMC4zNzUgMzIwIDQ0OFMzMDUuNjI1IDQ4MCAyODggNDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Blender(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M336 64H494.5L512 0H48C21.49 0 0 21.49 0 48V208C0 234.51 21.49 256 48 256H151.25L160 352H416L433.5 288H336C327.199 288 320 280.801 320 272S327.199 256 336 256H442.125L459.625 192H336C327.199 192 320 184.801 320 176S327.199 160 336 160H468.375L485.875 96H336C327.199 96 320 88.801 320 80S327.199 64 336 64ZM64 192V64H133.875L145.5 192H64Z" />
            <path d="M336 288H433.455L442.182 256H336C327.164 256 320 263.162 320 272C320 280.836 327.164 288 336 288ZM336 192H459.637L468.363 160H336C327.164 160 320 167.162 320 176C320 184.836 327.164 192 336 192ZM336 64C327.164 64 320 71.162 320 80C320 88.836 327.164 96 336 96H485.818L494.545 64H336ZM416 384H160C124.625 384 96 412.625 96 448V480C96 497.625 110.375 512 128 512H448C465.625 512 480 497.625 480 480V448C480 412.625 451.375 384 416 384ZM288 480C270.375 480 256 465.625 256 448S270.375 416 288 416S320 430.375 320 448S305.625 480 288 480Z" />
        </Icon>
    </>
}
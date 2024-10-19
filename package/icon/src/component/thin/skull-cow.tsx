
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `skull-cow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=thin skull-cow}
 * @preview ![skull-cow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjE2LjAwM0MyMzMuOTY5IDIxNi4wMDMgMjE2IDIzMy45NzIgMjE2IDI1Ni4wMDNDMjE2IDI3OC4wMzQgMjMzLjk2OSAyOTYuMDAzIDI1NiAyOTYuMDAzUzI5NiAyNzguMDM0IDI5NiAyNTYuMDAzQzI5NiAyMzMuOTcyIDI3OC4wMzEgMjE2LjAwMyAyNTYgMjE2LjAwM1pNMjU2IDI4MC4wMDNDMjQyLjc2OCAyODAuMDAzIDIzMiAyNjkuMjM1IDIzMiAyNTYuMDAzQzIzMiAyNDIuNzY5IDI0Mi43NjggMjMyLjAwMyAyNTYgMjMyLjAwM0MyNjkuMjM0IDIzMi4wMDMgMjgwIDI0Mi43NjkgMjgwIDI1Ni4wMDNDMjgwIDI2OS4yMzUgMjY5LjIzNCAyODAuMDAzIDI1NiAyODAuMDAzWk0zODQgMjE2LjAwM0MzNjEuOTY5IDIxNi4wMDMgMzQ0IDIzMy45NzIgMzQ0IDI1Ni4wMDNDMzQ0IDI3OC4wMzQgMzYxLjk2OSAyOTYuMDAzIDM4NCAyOTYuMDAzUzQyNCAyNzguMDM0IDQyNCAyNTYuMDAzQzQyNCAyMzMuOTcyIDQwNi4wMzEgMjE2LjAwMyAzODQgMjE2LjAwM1pNMzg0IDI4MC4wMDNDMzcwLjc2OCAyODAuMDAzIDM2MCAyNjkuMjM1IDM2MCAyNTYuMDAzQzM2MCAyNDIuNzY5IDM3MC43NjggMjMyLjAwMyAzODQgMjMyLjAwM0MzOTcuMjM0IDIzMi4wMDMgNDA4IDI0Mi43NjkgNDA4IDI1Ni4wMDNDNDA4IDI2OS4yMzUgMzk3LjIzNCAyODAuMDAzIDM4NCAyODAuMDAzWk00MTYgOTYuMDA1SDIyNEMxODguNjU0IDk2LjAwNSAxNjAgMTI0LjY1OSAxNjAgMTYwLjAwNFYyODguMDAzQzE2MCAzMDkuMjI3IDE3MC4zMDUgMzI4LjAyMiAxODYuMTkxIDMzOS42NjJDMjEwLjYyNyAzNTcuNTY4IDIyOS45MTYgMzgxLjU0NiAyMzUuODYxIDQxMS4yNTFMMjUwLjg3NSA0ODYuMjVDMjUzLjc1IDUwMS4yNSAyNjcgNTEyIDI4Mi4yNSA1MTJIMzU3LjcwOUMzNzIuOTggNTEyIDM4Ni4xMjkgNTAxLjIyMyAzODkuMTI1IDQ4Ni4yNUw0MDQuMTM5IDQxMS4yNTFDNDEwLjA4NiAzODEuNTQ2IDQyOS4zNzUgMzU3LjU2OCA0NTMuODExIDMzOS42NjJDNDY5LjY5NSAzMjguMDIyIDQ4MCAzMDkuMjI3IDQ4MCAyODguMDAzVjE2MC4wMDRDNDgwIDEyNC42NTkgNDUxLjM0OCA5Ni4wMDUgNDE2IDk2LjAwNVpNNDY0IDI4OC4wMDNDNDY0IDMwMy40ODEgNDU2Ljg0IDMxNy42MDggNDQ0LjM1NCAzMjYuNzU2QzQxMy45OCAzNDkuMDEyIDM5NC42NSAzNzcuMTQ0IDM4OC40NTEgNDA4LjExMUwzNzMuNDM4IDQ4My4xMUMzNzEuOTQxIDQ5MC41NzggMzY1LjMyOCA0OTYgMzU3LjcwOSA0OTZIMjgyLjI1QzI3NC41OTQgNDk2IDI2OC4wMDggNDkwLjYzMyAyNjYuNTY0IDQ4My4xMUwyNTEuNTUxIDQwOC4xMTFDMjQ1LjM1MiAzNzcuMTQ0IDIyNi4wMjEgMzQ5LjAxMiAxOTUuNjQ4IDMyNi43NTZDMTgzLjE2MiAzMTcuNjA4IDE3NiAzMDMuNDgxIDE3NiAyODguMDAzVjE2MC4wMDRDMTc2IDEzMy41MzggMTk3LjUzMyAxMTIuMDA1IDIyNCAxMTIuMDA1SDQxNkM0NDIuNDY3IDExMi4wMDUgNDY0IDEzMy41MzggNDY0IDE2MC4wMDRWMjg4LjAwM1pNNTcuMjE5IDExNy44OEM2NS4wNjIgMTI5LjM3OSA3OC4xMjUgMTM0Ljk3MyA5Ny4xNDEgMTM0Ljk3M0gxMjYuODU5QzEzMS4yODEgMTM0Ljk3MyAxMzQuODU5IDEzMS4zNzkgMTM0Ljg1OSAxMjYuOTczQzEzNC44NTkgMTIyLjU2NyAxMzEuMjgxIDExOC45NzMgMTI2Ljg1OSAxMTguOTczSDk3LjE0MUM4My44MTIgMTE4Ljk3MyA3NS4wNzggMTE1LjY2MSA3MC40MDYgMTA4LjgxN0M1Ny44NDQgOTAuNzI0IDY3LjQwNiA0OC41MDUgNzMuOTg0IDMwLjg4MUM3Ny43NSAyMC44NSA3NC4xMDkgOS42OTMgNjUuMDMxIDMuNjkzQzU2IC0yLjE1IDQ0LjI2NiAtMC45NjMgMzYuNTMxIDYuNTY4QzEyLjk2OSAyOS42MzEgMCA2MS43NTUgMCA5Ny4wMDVDMCAxNjcuMDM1IDU2LjkwNiAyMjQuMDAzIDEyNi44NTkgMjI0LjAwM0MxMzEuMjgxIDIyNC4wMDMgMTM0Ljg1OSAyMjAuNDEgMTM0Ljg1OSAyMTYuMDAzQzEzNC44NTkgMjExLjU5NyAxMzEuMjgxIDIwOC4wMDQgMTI2Ljg1OSAyMDguMDA0QzY1LjczNCAyMDguMDA0IDE2IDE1OC4yMjMgMTYgOTcuMDA1QzE2IDY2LjA5OSAyNy4yNjYgMzguMDM3IDQ3LjcxOSAxOC4wMDZDNTAuMDk0IDE1Ljc4NyA1My42MDkgMTUuMzgxIDU2LjI4MSAxNy4wNjhDNTkuMDE2IDE4Ljg4MSA2MC4xNDEgMjIuMjU2IDU5IDI1LjI1NkM1OC43ODEgMjUuODgxIDM2LjEwOSA4Ny40NzQgNTcuMjE5IDExNy44OFpNNjA1Ljg3NSA5LjFMNjAzLjQ2OSA2LjU2OEM1OTUuODEzIC0wLjkgNTgzLjgyOCAtMi4xMTkgNTc0LjkzOCAzLjY5M0M1NjUuODc1IDkuNiA1NjIuMTQxIDIxLjEgNTY2IDMwLjk0M0M1NzIuNTc4IDQ4LjU5OSA1ODIuMTA5IDkwLjg0OSA1NjkuNTYyIDEwOC45MTFDNTY0LjkyMiAxMTUuNjkyIDU1Ni4xODcgMTE5LjAwNSA1NDIuODU5IDExOS4wMDVINTEzLjE0MUM1MDguNzE5IDExOS4wMDUgNTA1LjE0MSAxMjIuNTk4IDUwNS4xNDEgMTI3LjAwNUM1MDUuMTQxIDEzMS40MTEgNTA4LjcxOSAxMzUuMDA0IDUxMy4xNDEgMTM1LjAwNEg1NDIuODU5QzU2MS44NzUgMTM1LjAwNCA1NzQuOTIyIDEyOS40NDIgNTgyLjc1IDExOC4wMDVDNjAwLjIzNCA5Mi43ODYgNTg3LjQwNiA0Mi41OTkgNTgwLjk1MyAyNS4yNTZDNTc5Ljc5NyAyMi4zMTggNTgwLjkzNyAxOC44ODEgNTgzLjY4NyAxNy4xQzU4Ni4wNjIgMTUuNTM3IDU4OS4yNjYgMTUuNjYyIDU5MS41NDcgMTcuMzgxTDU5Mi4yODEgMTguMUM2MTIuNzM0IDM4LjEzMSA2MjQgNjYuMTkzIDYyNCA5Ny4wOTlDNjI0IDE1OC4yNTQgNTc0LjI2NiAyMDguMDA0IDUxMy4xNDEgMjA4LjAwNEM1MDguNzE5IDIwOC4wMDQgNTA1LjE0MSAyMTEuNTk3IDUwNS4xNDEgMjE2LjAwM0M1MDUuMTQxIDIyMC40MSA1MDguNzE5IDIyNC4wMDMgNTEzLjE0MSAyMjQuMDAzQzU4My4wOTQgMjI0LjAwMyA2NDAgMTY3LjA2NyA2NDAgOTcuMDk5QzY0MCA2My4wNjggNjI3LjkwNiAzMS45NDMgNjA1Ljg3NSA5LjFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SkullCow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M256 216.003C233.969 216.003 216 233.972 216 256.003C216 278.034 233.969 296.003 256 296.003S296 278.034 296 256.003C296 233.972 278.031 216.003 256 216.003ZM256 280.003C242.768 280.003 232 269.235 232 256.003C232 242.769 242.768 232.003 256 232.003C269.234 232.003 280 242.769 280 256.003C280 269.235 269.234 280.003 256 280.003ZM384 216.003C361.969 216.003 344 233.972 344 256.003C344 278.034 361.969 296.003 384 296.003S424 278.034 424 256.003C424 233.972 406.031 216.003 384 216.003ZM384 280.003C370.768 280.003 360 269.235 360 256.003C360 242.769 370.768 232.003 384 232.003C397.234 232.003 408 242.769 408 256.003C408 269.235 397.234 280.003 384 280.003ZM416 96.005H224C188.654 96.005 160 124.659 160 160.004V288.003C160 309.227 170.305 328.022 186.191 339.662C210.627 357.568 229.916 381.546 235.861 411.251L250.875 486.25C253.75 501.25 267 512 282.25 512H357.709C372.98 512 386.129 501.223 389.125 486.25L404.139 411.251C410.086 381.546 429.375 357.568 453.811 339.662C469.695 328.022 480 309.227 480 288.003V160.004C480 124.659 451.348 96.005 416 96.005ZM464 288.003C464 303.481 456.84 317.608 444.354 326.756C413.98 349.012 394.65 377.144 388.451 408.111L373.438 483.11C371.941 490.578 365.328 496 357.709 496H282.25C274.594 496 268.008 490.633 266.564 483.11L251.551 408.111C245.352 377.144 226.021 349.012 195.648 326.756C183.162 317.608 176 303.481 176 288.003V160.004C176 133.538 197.533 112.005 224 112.005H416C442.467 112.005 464 133.538 464 160.004V288.003ZM57.219 117.88C65.062 129.379 78.125 134.973 97.141 134.973H126.859C131.281 134.973 134.859 131.379 134.859 126.973C134.859 122.567 131.281 118.973 126.859 118.973H97.141C83.812 118.973 75.078 115.661 70.406 108.817C57.844 90.724 67.406 48.505 73.984 30.881C77.75 20.85 74.109 9.693 65.031 3.693C56 -2.15 44.266 -0.963 36.531 6.568C12.969 29.631 0 61.755 0 97.005C0 167.035 56.906 224.003 126.859 224.003C131.281 224.003 134.859 220.41 134.859 216.003C134.859 211.597 131.281 208.004 126.859 208.004C65.734 208.004 16 158.223 16 97.005C16 66.099 27.266 38.037 47.719 18.006C50.094 15.787 53.609 15.381 56.281 17.068C59.016 18.881 60.141 22.256 59 25.256C58.781 25.881 36.109 87.474 57.219 117.88ZM605.875 9.1L603.469 6.568C595.813 -0.9 583.828 -2.119 574.938 3.693C565.875 9.6 562.141 21.1 566 30.943C572.578 48.599 582.109 90.849 569.562 108.911C564.922 115.692 556.187 119.005 542.859 119.005H513.141C508.719 119.005 505.141 122.598 505.141 127.005C505.141 131.411 508.719 135.004 513.141 135.004H542.859C561.875 135.004 574.922 129.442 582.75 118.005C600.234 92.786 587.406 42.599 580.953 25.256C579.797 22.318 580.937 18.881 583.687 17.1C586.062 15.537 589.266 15.662 591.547 17.381L592.281 18.1C612.734 38.131 624 66.193 624 97.099C624 158.254 574.266 208.004 513.141 208.004C508.719 208.004 505.141 211.597 505.141 216.003C505.141 220.41 508.719 224.003 513.141 224.003C583.094 224.003 640 167.067 640 97.099C640 63.068 627.906 31.943 605.875 9.1Z" />
        </Icon>
    </>
}
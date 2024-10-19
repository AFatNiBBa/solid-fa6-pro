
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clouds-moon` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-moon?s=thin clouds-moon}
 * @preview ![clouds-moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzcuODQ5IDI0Mi4wOTRDNjM0LjUyMSAyMzYuNTc4IDYyOC4zNDkgMjMzLjg0NCA2MjIuMDIxIDIzNS4wNzhDNTg5LjA2NyAyNDEuMjUgNTU1LjQ0MiAyMzIuNjU2IDUyOS43NTQgMjExLjM3NUM1MDQuMzc5IDE5MC4zMjggNDg5LjgzMiAxNTkuNDUzIDQ4OS44MzIgMTI2LjY1NkM0ODkuODMyIDg3LjA0NyA1MTEuMzk1IDUwLjI2NiA1NDYuMDIgMzAuNzAzQzU1MS42NjEgMjcuNTk0IDU1NC42MjkgMjEuNDg0IDU1My41ODMgMTUuMTA5UzU0Ny43MjMgMy44NTkgNTQxLjQ0MiAyLjczNEM1MzIuMDgyIDAuOTIyIDUyMi4yMzkgMCA1MTIuMTc2IDBDNDI3LjEyOCAwIDM1Ny4xMTIgNjYuMzc1IDM1Mi43ODQgMTUxLjA5NEMzNTIuNTUgMTU1LjUgMzU1Ljk0IDE1OS4yNjYgMzYwLjM2MiAxNTkuNDg0QzM2NS4wMDMgMTYwLjE0MSAzNjguNTE5IDE1Ni4zMTIgMzY4Ljc1MyAxNTEuOTA2QzM3Mi42NDQgNzUuNzAzIDQzNS42NDQgMTYgNTEyLjE3NiAxNkM1MjEuMjM5IDE2IDUzMC40NzMgMTYuNzUgNTM4LjIyMyAxNi43MzRDNDk4LjUwNCAzOS4xNTYgNDczLjgzMiA4MS4yODEgNDczLjgzMiAxMjYuNjU2QzQ3My44MzIgMTY0LjIzNCA0OTAuNDg4IDE5OS42MDkgNTE5LjU1MSAyMjMuNjg4QzU0OC44NzkgMjQ4LjAzMSA1ODcuMjg2IDI1Ny45MzggNjI0LjE2MSAyNDkuMjAzQzYwMy4yMjQgMjc0LjgxMyA1NzMuMTQ1IDI5Mi40ODQgNTM5LjQ1NyAyOTguOTUzQzUzNS4xMjkgMjk5Ljc5NyA1MzIuMjg2IDMwMy45ODQgNTMzLjExNCAzMDguMzI4QzUzMy44NDggMzEyLjE1NiA1MzcuMjA3IDMxNC44MTMgNTQwLjk1NyAzMTQuODEzQzU0MS40NTcgMzE0LjgxMyA1NDEuOTczIDMxNC43NjYgNTQyLjQ4OSAzMTQuNjcyQzU3OS44MzMgMzA3LjQ4NCA2MTMuMjM5IDI4Ny44MjggNjM2LjUzNiAyNTkuMzI4QzY0MC42MyAyNTQuMzQ0IDY0MS4xMyAyNDcuNTc4IDYzNy44NDkgMjQyLjA5NFpNNDEgMzEwLjE4OEM0My41MzIgMzEwLjE4OCA0Ni4wNDcgMzA4Ljk2OSA0Ny41OTQgMzA2LjcxOUM1MC4wOTQgMzAzLjA3OCA0OS4xNzIgMjk4LjA5NCA0NS41MzIgMjk1LjU5NEMyNy4wNDcgMjgyLjg5MSAxNiAyNjIuMTQxIDE2IDI0MC4xMDlDMTYgMjAyLjg1OSA0Ni4zNiAxNzIuNTQ3IDgzLjY4OCAxNzIuNTQ3SDEwNi45MDdMMTA4LjIwNCAxNjYuMTI1QzExNC41MzIgMTM0Ljc2NiAxNDIuNDA3IDExMiAxNzQuNTAxIDExMkMyMDYuNTggMTEyIDIzNC40NzEgMTM0Ljc2NiAyNDAuODE0IDE2Ni4xMjVMMjQyLjExMSAxNzIuNTQ3SDI2NS4zM0MyODIuNDQgMTcyLjU0NyAyOTguNzk5IDE3OS4wNDcgMzExLjQyNCAxOTAuODU5QzMxNC42NTkgMTkzLjg1OSAzMTkuNzIxIDE5My43MTkgMzIyLjczNyAxOTAuNDg0UzMyNS41ODEgMTgyLjE4NyAzMjIuMzYyIDE3OS4xNzJDMzA2Ljc1MiAxNjQuNTc4IDI4Ni41MDIgMTU2LjU0NyAyNjUuMzMgMTU2LjU0N0gyNTQuOTRDMjQ0Ljc2OCAxMjEuMDk0IDIxMS45MzkgOTYgMTc0LjUwMSA5NkMxMzcuMDQ4IDk2IDEwNC4yMzUgMTIxLjA5NCA5NC4wNzkgMTU2LjU0N0g4My42ODhDMzcuNTQ3IDE1Ni41NDcgMCAxOTQuMDMxIDAgMjQwLjEwOUMwIDI2Ny40MDYgMTMuNjQxIDI5My4wNzggMzYuNDY5IDMwOC43ODFDMzcuODYgMzA5LjczNCAzOS40MzggMzEwLjE4OCA0MSAzMTAuMTg4Wk00NzguODc5IDMyNS42MjVDNDczLjYyOSAyNjguNzUgNDI2LjI1MyAyMjQgMzY4LjAwMyAyMjRDMzI0Ljc1MyAyMjQgMjg3LjYyNyAyNDguODc1IDI2OS4wMDIgMjg0Ljc1QzI1NC4yNTIgMjY3LjI1IDIzMi42MjcgMjU2IDIwOC4wMDIgMjU2QzE2OS4yNTEgMjU2IDEzNy4wMDEgMjgzLjUgMTI5LjYyNiAzMjBIMTI4LjAwMUM3NS4wMDEgMzIwIDMyIDM2MyAzMiA0MTZTNzUuMDAxIDUxMiAxMjguMDAxIDUxMkg0NDguMDA0QzUwMS4wMDQgNTEyIDU0NC4wMDQgNDY5IDU0NC4wMDQgNDE2QzU0NC4wMDQgMzczLjg3NSA1MTYuNzU0IDMzOC41IDQ3OC44NzkgMzI1LjYyNVpNNDQ4LjAwNCA0OTZIMTI4LjAwMUM4My44ODcgNDk2IDQ4IDQ2MC4xMTEgNDggNDE2UzgzLjg4NyAzMzYgMTI4LjAwMSAzMzZIMTQyLjcxNkwxNDUuMzEgMzIzLjE3QzE1MS4zIDI5My41MiAxNzcuNjY1IDI3MiAyMDguMDAyIDI3MkMyMjYuOTE0IDI3MiAyNDQuMjMyIDI4MC4xODkgMjU2Ljc2OCAyOTUuMDYyTDI3Mi4xODIgMzEzLjM1TDI4My4yMDIgMjkyLjEyM0MyOTkuODkzIDI1OS45NzMgMzMyLjM4NyAyNDAgMzY4LjAwMyAyNDBDNDE3LjU0NiAyNDAgNDU4LjM2MyAyNzcuNDQzIDQ2Mi45NDUgMzI3LjA5Nkw0NjMuOSAzMzcuNDM0TDQ3My43MjggMzQwLjc3M0M1MDYuMTkyIDM1MS44MDkgNTI4LjAwNCAzODIuMDM5IDUyOC4wMDQgNDE2QzUyOC4wMDQgNDYwLjExMSA0OTIuMTE1IDQ5NiA0NDguMDA0IDQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudsMoon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M637.849 242.094C634.521 236.578 628.349 233.844 622.021 235.078C589.067 241.25 555.442 232.656 529.754 211.375C504.379 190.328 489.832 159.453 489.832 126.656C489.832 87.047 511.395 50.266 546.02 30.703C551.661 27.594 554.629 21.484 553.583 15.109S547.723 3.859 541.442 2.734C532.082 0.922 522.239 0 512.176 0C427.128 0 357.112 66.375 352.784 151.094C352.55 155.5 355.94 159.266 360.362 159.484C365.003 160.141 368.519 156.312 368.753 151.906C372.644 75.703 435.644 16 512.176 16C521.239 16 530.473 16.75 538.223 16.734C498.504 39.156 473.832 81.281 473.832 126.656C473.832 164.234 490.488 199.609 519.551 223.688C548.879 248.031 587.286 257.938 624.161 249.203C603.224 274.813 573.145 292.484 539.457 298.953C535.129 299.797 532.286 303.984 533.114 308.328C533.848 312.156 537.207 314.813 540.957 314.813C541.457 314.813 541.973 314.766 542.489 314.672C579.833 307.484 613.239 287.828 636.536 259.328C640.63 254.344 641.13 247.578 637.849 242.094ZM41 310.188C43.532 310.188 46.047 308.969 47.594 306.719C50.094 303.078 49.172 298.094 45.532 295.594C27.047 282.891 16 262.141 16 240.109C16 202.859 46.36 172.547 83.688 172.547H106.907L108.204 166.125C114.532 134.766 142.407 112 174.501 112C206.58 112 234.471 134.766 240.814 166.125L242.111 172.547H265.33C282.44 172.547 298.799 179.047 311.424 190.859C314.659 193.859 319.721 193.719 322.737 190.484S325.581 182.187 322.362 179.172C306.752 164.578 286.502 156.547 265.33 156.547H254.94C244.768 121.094 211.939 96 174.501 96C137.048 96 104.235 121.094 94.079 156.547H83.688C37.547 156.547 0 194.031 0 240.109C0 267.406 13.641 293.078 36.469 308.781C37.86 309.734 39.438 310.188 41 310.188ZM478.879 325.625C473.629 268.75 426.253 224 368.003 224C324.753 224 287.627 248.875 269.002 284.75C254.252 267.25 232.627 256 208.002 256C169.251 256 137.001 283.5 129.626 320H128.001C75.001 320 32 363 32 416S75.001 512 128.001 512H448.004C501.004 512 544.004 469 544.004 416C544.004 373.875 516.754 338.5 478.879 325.625ZM448.004 496H128.001C83.887 496 48 460.111 48 416S83.887 336 128.001 336H142.716L145.31 323.17C151.3 293.52 177.665 272 208.002 272C226.914 272 244.232 280.189 256.768 295.062L272.182 313.35L283.202 292.123C299.893 259.973 332.387 240 368.003 240C417.546 240 458.363 277.443 462.945 327.096L463.9 337.434L473.728 340.773C506.192 351.809 528.004 382.039 528.004 416C528.004 460.111 492.115 496 448.004 496Z" />
        </Icon>
    </>
}
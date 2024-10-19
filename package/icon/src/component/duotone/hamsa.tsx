
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hamsa` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=duotone hamsa}
 * @preview ![hamsa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwOS4zODIgMzA3LjI1QzUwNC4yNTcgMjk1LjUgNDkyLjc1NyAyODggNDgwLjAwNiAyODhINDE2LjAwNFY4MEM0MTYuMDA0IDU4IDM5OC4wMDQgNDAgMzc2LjAwMyA0MEMzNTQuMDAzIDQwIDMzNi4wMDIgNTggMzM2LjAwMiA4MFYyMTRDMzM2LjAwMiAyMTkuNSAzMzEuNTAyIDIyNCAzMjYuMDAyIDIyNEgzMDYuMDAxQzMwMC41MDEgMjI0IDI5Ni4wMDEgMjE5LjUgMjk2LjAwMSAyMTRWNDBDMjk2LjAwMSAxOCAyNzguMDAxIDAgMjU2IDBTMjE1Ljk5OSAxOCAyMTUuOTk5IDQwVjIxNEMyMTUuOTk5IDIxOS41IDIxMS40OTkgMjI0IDIwNS45OTkgMjI0SDE4NS45OThDMTgwLjQ5OCAyMjQgMTc1Ljk5OCAyMTkuNSAxNzUuOTk4IDIxNFY4MEMxNzUuOTk4IDU4IDE1Ny45OTcgNDAgMTM1Ljk5NyA0MFM5NS45OTYgNTggOTUuOTk2IDgwVjI4OEgzMS45OTRDMTkuMjQzIDI4OCA3Ljc0MyAyOTUuNSAyLjYxOCAzMDcuMjVDLTIuMzgyIDMxOC44NzUgLTAuMTMyIDMzMi41IDguNjE4IDM0MS44NzVMMTExLjI0NiA0NTEuODc1QzE0Ni45OTcgNDkwLjEyNSAxOTkuNzQ4IDUxMiAyNTYgNTEyUzM2NS4wMDMgNDkwLjEyNSA0MDAuNzU0IDQ1MS44NzVMNTAzLjM4MiAzNDEuODc1QzUxMi4xMzIgMzMyLjUgNTE0LjM4MiAzMTguODc1IDUwOS4zODIgMzA3LjI1Wk0yNTYgNDE2QzIwMi45OTkgNDE2IDE1OS45OTcgMzUyIDE1OS45OTcgMzUyUzIwMi45OTkgMjg4IDI1NiAyODhTMzUyLjAwMyAzNTIgMzUyLjAwMyAzNTJTMzA5LjAwMSA0MTYgMjU2IDQxNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjg4LjAwMiAzNTJDMjg4LjAwMiAzNjkuNjI1IDI3My42MjYgMzg0IDI1Ni4wMDEgMzg0UzIyNCAzNjkuNjI1IDIyNCAzNTJTMjM4LjM3NSAzMjAgMjU2LjAwMSAzMjBTMjg4LjAwMiAzMzQuMzc1IDI4OC4wMDIgMzUyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Hamsa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M509.382 307.25C504.257 295.5 492.757 288 480.006 288H416.004V80C416.004 58 398.004 40 376.003 40C354.003 40 336.002 58 336.002 80V214C336.002 219.5 331.502 224 326.002 224H306.001C300.501 224 296.001 219.5 296.001 214V40C296.001 18 278.001 0 256 0S215.999 18 215.999 40V214C215.999 219.5 211.499 224 205.999 224H185.998C180.498 224 175.998 219.5 175.998 214V80C175.998 58 157.997 40 135.997 40S95.996 58 95.996 80V288H31.994C19.243 288 7.743 295.5 2.618 307.25C-2.382 318.875 -0.132 332.5 8.618 341.875L111.246 451.875C146.997 490.125 199.748 512 256 512S365.003 490.125 400.754 451.875L503.382 341.875C512.132 332.5 514.382 318.875 509.382 307.25ZM256 416C202.999 416 159.997 352 159.997 352S202.999 288 256 288S352.003 352 352.003 352S309.001 416 256 416Z" />
            <path d="M288.002 352C288.002 369.625 273.626 384 256.001 384S224 369.625 224 352S238.375 320 256.001 320S288.002 334.375 288.002 352Z" />
        </Icon>
    </>
}